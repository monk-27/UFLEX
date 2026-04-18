<?php
/**
 * Shared security helper for UFlex PHP form endpoints.
 * Handles CORS whitelisting and IP-based rate limiting.
 *
 * Usage: require_once __DIR__ . '/_security-helper.php';
 */

// ============================================
// 1. CORS - Whitelist only trusted origins
// ============================================
$allowed_origins = [
  'https://beta.uflexltd.com',
  'https://www.beta.uflexltd.com',
  'https://uflexltd.com',
  'https://www.uflexltd.com',
  'https://delta.uflexltd.com',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins, true)) {
  header("Access-Control-Allow-Origin: $origin");
  header("Vary: Origin");
}
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle CORS preflight
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
  http_response_code(204);
  exit;
}

// ============================================
// 2. IP-based rate limiting
// ============================================
function uflex_rate_limit_check($max_attempts = 8, $window_seconds = 900) {
  // Identify client IP (safe even behind Cloudflare / proxies)
  $ip = $_SERVER['HTTP_CF_CONNECTING_IP']
      ?? $_SERVER['HTTP_X_FORWARDED_FOR']
      ?? $_SERVER['REMOTE_ADDR']
      ?? 'unknown';
  // If X-Forwarded-For has multiple IPs, take the first
  if (strpos($ip, ',') !== false) {
    $ip = trim(explode(',', $ip)[0]);
  }

  // Storage directory outside public access
  $storage_dir = sys_get_temp_dir() . '/uflex_rate_limit';
  if (!is_dir($storage_dir)) {
    @mkdir($storage_dir, 0700, true);
  }

  // File name based on hashed IP (no PII on disk)
  $file = $storage_dir . '/' . sha1($ip) . '.json';
  $now = time();

  $data = ['count' => 0, 'first' => $now];
  if (file_exists($file)) {
    $raw = @file_get_contents($file);
    if ($raw) {
      $decoded = json_decode($raw, true);
      if (is_array($decoded) && isset($decoded['count'], $decoded['first'])) {
        $data = $decoded;
      }
    }
  }

  // Reset window if expired
  if (($now - $data['first']) > $window_seconds) {
    $data = ['count' => 0, 'first' => $now];
  }

  $data['count']++;

  // Persist
  @file_put_contents($file, json_encode($data), LOCK_EX);

  // Deny if exceeded
  if ($data['count'] > $max_attempts) {
    $retry_after = $window_seconds - ($now - $data['first']);
    http_response_code(429);
    header("Retry-After: " . max(1, $retry_after));
    echo json_encode([
      'success' => false,
      'message' => 'Too many requests. Please try again after a few minutes.'
    ]);
    exit;
  }
}

// ============================================
// 3. Clean up old rate-limit files (1-in-50 chance per request)
// ============================================
if (mt_rand(1, 50) === 1) {
  $storage_dir = sys_get_temp_dir() . '/uflex_rate_limit';
  if (is_dir($storage_dir)) {
    $cutoff = time() - 3600; // 1 hour
    foreach (glob($storage_dir . '/*.json') ?: [] as $old_file) {
      if (@filemtime($old_file) < $cutoff) {
        @unlink($old_file);
      }
    }
  }
}
