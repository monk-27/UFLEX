<?php

// Security: CORS whitelist + IP-based rate limiting
require_once __DIR__ . '/_security-helper.php';
uflex_rate_limit_check(30, 900); // max 30 lookups per IP per 15 minutes

function parse_env_file($path)
{
  if (!file_exists($path)) {
    return [];
  }
  $variables = [];
  $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  foreach ($lines as $line) {
    if (strpos(trim($line), '#') === 0)
      continue;
    if (strpos($line, '=') !== false) {
      list($name, $value) = explode('=', $line, 2);
      $name = trim($name);
      $value = trim($value);
      if (!empty($name)) {
        $variables[$name] = $value;
      }
    }
  }
  return $variables;
}

// Load configurations securely
$env = [];
$searchPaths = [
  __DIR__ . '/.env.local',
  __DIR__ . '/../.env.local',
  $_SERVER['DOCUMENT_ROOT'] . '/.env.local'
];

foreach ($searchPaths as $path) {
  if (file_exists($path)) {
    $env = parse_env_file($path);
    break; 
  }
}

// Allow both GET and POST for flexibility during API fetch
$folioNo = $_REQUEST['folio_id'] ?? '';

if (empty($folioNo)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'Please provide a Folio No. / DP-ID.']);
  exit;
}

try {
  if (empty($env['DB_HOST']) || empty($env['DB_USER']) || empty($env['DB_PASSWORD_B64']) || empty($env['DB_NAME'])) {
    throw new RuntimeException('Database configuration is missing from environment.');
  }
  $dbHost = $env['DB_HOST'];
  $dbUser = $env['DB_USER'];
  $dbPass = base64_decode($env['DB_PASSWORD_B64']);
  $dbName = $env['DB_NAME'];

  $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8mb4", $dbUser, $dbPass, [
    PDO::ATTR_TIMEOUT => 5,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
  ]);

  // Query the database using prepared statements
  $stmt = $pdo->prepare("SELECT * FROM corpsh WHERE folio_id = ?");
  $stmt->execute([$folioNo]);
  
  $results = $stmt->fetchAll();

  if (count($results) > 0) {
      echo json_encode([
          'success' => true,
          'data' => $results
      ]);
  } else {
      echo json_encode([
          'success' => false,
          'message' => 'No records found for the given Folio No. / DP-ID.'
      ]);
  }

} catch (Throwable $e) {
  error_log("Database Error in get-unclaimed-dividend.php: " . $e->getMessage());
  http_response_code(500);
  echo json_encode([
      'success' => false,
      'message' => 'Failed to connect to the database or execute query.'
  ]);
}
