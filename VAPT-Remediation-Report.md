# UFlex Ltd - Security Enhancement Report

**Prepared for:** UFlex Ltd  
**Date:** April 16, 2026  
**Scope:** beta.uflexltd.com | uflexltd.com  
**Server:** 184.168.125.211  

---

## Executive Summary

Following a routine security assessment (VAPT) conducted on April 13, 2026, we have identified several areas where the security posture of both **beta.uflexltd.com** and **uflexltd.com** can be strengthened. Most of these are standard security headers that are straightforward to implement, along with two server-level software updates that the hosting provider can handle.

The good news: none of these findings indicate an active breach or data compromise. They represent opportunities to harden the infrastructure and align with industry best practices before the beta site goes live.

| Category | Items | Severity Level |
|---|---|---|
| Security Headers (Application Layer) | 5 improvements | Low / Informational |
| Infrastructure Hardening | 1 composite improvement | Medium |
| Server Software Updates | 2 updates needed | High |

---

## What's Changing in the Beta Version

The new **beta.uflexltd.com** is a complete rebuild of the website using modern technology:

| Aspect | Current Site (uflexltd.com) | New Beta Site (beta.uflexltd.com) |
|---|---|---|
| Technology | PHP (server-rendered pages) | Next.js 15 + React 19 + TypeScript |
| Styling | Traditional CSS | Tailwind CSS + Modern UI Components |
| Performance | Standard page loads | Static pre-built pages (faster load times) |
| Forms & APIs | PHP form handlers | Modern API routes + CAPTCHA validation |
| Deployment | Manual uploads | Automated via GitHub Actions |
| Database | Direct PHP queries | Connection pooling with MySQL |

**Both sites currently share the same server (184.168.125.211)**, which means server-level improvements will benefit both environments simultaneously.

---

# SECTION A: beta.uflexltd.com (New Beta Website)

The following improvements will be implemented as part of the beta site deployment. Since the beta site uses a static export (pre-built HTML/CSS/JS files served via Apache on cPanel), all security headers will be configured at the server level using `.htaccess`.

---

## A1. Adding Content Security Policy (CSP)

**Reference:** APPSEC-002 | **Severity:** Low

### In Simple Terms

A Content Security Policy is like a guest list for a website. It tells the browser exactly which external sources (scripts, fonts, images, analytics) are allowed to load on the page. Without this guest list, the browser allows anything and everything, which could include malicious scripts if someone tries to inject them.

### What We Will Do

We will add a CSP header that explicitly whitelists only the trusted sources the beta site actually uses, such as Google Fonts, Google Analytics, and Vercel Analytics. Everything else will be blocked by default.

### Implementation

This will be added to the `.htaccess` file on the beta subdomain:

```apache
Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self';"
```

---

## A2. Adding X-Content-Type-Options Header

**Reference:** APPSEC-006 | **Severity:** Low

### In Simple Terms

When a browser receives a file, it sometimes tries to guess what type of file it is (a technique called "MIME sniffing") instead of trusting what the server says. This can be risky if a file is mislabeled. By adding this header, we instruct the browser to always trust the declared file type and never guess.

### What We Will Do

We will add a single header (`X-Content-Type-Options: nosniff`) that prevents browsers from guessing file types. This is a simple, zero-risk addition.

### Implementation

```apache
Header set X-Content-Type-Options "nosniff"
```

---

## A3. Adding Referrer-Policy Header

**Reference:** APPSEC-003 | **Severity:** Low

### In Simple Terms

When a user clicks a link on the UFlex site that goes to an external website, the browser may send the full URL of the page they were on (including any parameters) to that external site. A Referrer-Policy controls how much of this information is shared. We can configure it so that only the domain name (`https://beta.uflexltd.com`) is shared with external sites, keeping internal page paths private.

### What We Will Do

We will set the policy to `strict-origin-when-cross-origin`, which shares the full URL only within the same site, and shares just the domain name when navigating to external sites.

### Implementation

```apache
Header set Referrer-Policy "strict-origin-when-cross-origin"
```

---

## A4. Adding Permissions-Policy Header

**Reference:** APPSEC-004 | **Severity:** Low

### In Simple Terms

Modern browsers have access to device features like camera, microphone, and location. A Permissions-Policy header lets us declare upfront that the website does not need access to these features. This prevents any embedded content (such as third-party widgets) from attempting to use them without authorization.

### What We Will Do

We will disable all sensitive browser features that the UFlex website does not require, such as camera, microphone, geolocation, and payment APIs.

### Implementation

```apache
Header set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), fullscreen=(self)"
```

---

## A5. Adding Cache-Control Headers

**Reference:** APPSEC-009 | **Severity:** Informational

### In Simple Terms

Cache-Control tells browsers and intermediate servers how long they should store a copy of a page or file before checking for a new version. Without these instructions, caching behavior is unpredictable -- users may see outdated content, or sensitive pages may be stored longer than intended.

### What We Will Do

We will configure intelligent caching rules:
- **HTML pages** will always check for the latest version (no stale content)
- **Static files** (images, CSS, JS, fonts) will be cached for long periods since they are versioned during each build
- **API responses** will not be cached at all

### Implementation

```apache
# HTML pages - always check for latest version
<FilesMatch "\.(html)$">
  Header set Cache-Control "no-cache, must-revalidate"
</FilesMatch>

# Static assets - long-term cache (versioned by build)
<FilesMatch "\.(css|js|jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot|ico|webp|mp4|webm)$">
  Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
```

---

## A6. Infrastructure Hardening for Beta

**Reference:** ATTSRF-001 | **Severity:** Medium

### What We Will Do

| Improvement | Description | How |
|---|---|---|
| **Rate Limiting on Forms** | Prevent automated bots from spamming the quote and contact forms repeatedly | Add request throttling to the PHP form endpoints (submit-quote.php, submit-contact.php) |
| **Hide Server Information** | Remove server software version details from HTTP responses so they are not visible to scanners | Add `ServerSignature Off` and `Header unset Server` to .htaccess |
| **Web Application Firewall** | Add a protective layer that filters malicious traffic before it reaches the server | Deploy Cloudflare (free tier available) as a DNS-level WAF |
| **Additional Security Headers** | Add extra protective headers beyond the VAPT findings | Add X-Frame-Options, X-XSS-Protection, and Strict-Transport-Security (HSTS) |

---

## Complete .htaccess for beta.uflexltd.com

All of the above improvements (A1 through A6) can be deployed in a single `.htaccess` file update:

```apache
# ============================================
# UFlex Beta - Security Headers
# Location: public_html/.htaccess (beta subdomain)
# Date: April 2026
# ============================================

<IfModule mod_headers.c>
  # A1: Content Security Policy
  Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self';"

  # A2: Prevent MIME Sniffing
  Header set X-Content-Type-Options "nosniff"

  # A3: Referrer Policy
  Header set Referrer-Policy "strict-origin-when-cross-origin"

  # A4: Permissions Policy
  Header set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), fullscreen=(self)"

  # A5: Cache Control for HTML
  Header set Cache-Control "no-cache, must-revalidate"

  # A6: Additional Security Headers
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

  # A6: Hide Server Information
  Header unset X-Powered-By
  Header unset Server
</IfModule>

# A5: Long-term Cache for Static Assets
<IfModule mod_headers.c>
  <FilesMatch "\.(css|js|jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot|ico|webp|mp4|webm)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>

ServerSignature Off
```

---

# SECTION B: uflexltd.com (Current Production Website)

The same security headers and improvements apply to the production site. Since uflexltd.com runs on PHP with the same Apache server, the implementation is identical.

---

## B1 - B5. Security Headers (Same as Beta)

All five security headers (CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Cache-Control) can be applied to the production site using the same `.htaccess` approach.

**One difference for CSP:** The Content Security Policy may need to be adjusted to include any additional third-party scripts or resources that the production PHP site loads (e.g., different analytics, embedded videos, social media widgets). Before applying, we recommend reviewing which external resources the production site uses.

### Implementation

Add the same `.htaccess` block to the production site's `public_html/` directory. The CSP `script-src` and `style-src` directives should be reviewed and updated to include any production-specific third-party domains.

---

## B6. Infrastructure Hardening (Same Server)

Since both sites share the same server, the following improvements apply equally:

| Improvement | Applies To | Notes |
|---|---|---|
| Hide Server Information | Both sites | Single .htaccess change per site |
| Web Application Firewall (Cloudflare) | Both sites | DNS-level, protects all subdomains |
| Rate Limiting on Forms | Both sites | Implement in respective form handlers |
| Restrict Admin Port Access | Server level | Contact hosting provider |

---

## B7. Privacy & Legal Pages

Both sites should include accessible privacy and legal pages:

- `/privacy-policy/`
- `/terms-of-use/`
- `/cookie-policy/`

These pages are flagged in the assessment as informational disclosures. They should be created by the legal/content team and published on both domains.

---

# SECTION C: Server-Level Updates (Applies to Both Sites)

These two items require action from the hosting provider or server administrator. They are not application-level changes and cannot be resolved through code deployment.

---

## C1. Exim Mail Server Update

**Reference:** CVE-2025-30232 | **Severity:** High | **CVSS:** 7.8

### In Simple Terms

The server uses Exim (version 4.98.1) to handle email. A known security issue in this version could allow someone with server access to gain elevated privileges. This can be resolved by updating Exim to the latest patched version.

### Recommended Action

| Step | Description | Owner |
|---|---|---|
| 1 | Update Exim to version 4.98.2 or later | Hosting Provider |
| 2 | Verify the update was applied (`exim --version`) | Server Admin |
| 3 | Restrict shell access to only authorized users | Server Admin |
| 4 | Consider migrating to a managed email service (Google Workspace, Microsoft 365) for long-term security | IT Team |

> **For shared hosting:** Submit a support ticket to the hosting provider requesting the Exim update, referencing CVE-2025-30232.

---

## C2. OpenSSH Update

**Reference:** CVE-2026-35414 | **Severity:** High | **CVSS:** 7.5 - 8.1

### In Simple Terms

The server uses OpenSSH (version 8.7) for secure remote access. A known issue in this version could allow unauthorized access under certain authentication configurations. Updating to the latest version resolves this.

### Recommended Action

| Step | Description | Owner |
|---|---|---|
| 1 | Update OpenSSH to version 10.3 or later | Hosting Provider |
| 2 | Verify the update was applied (`ssh -V`) | Server Admin |
| 3 | Restrict SSH access to specific authorized IP addresses | Server Admin |
| 4 | Use key-based authentication instead of passwords | Server Admin |

> **For shared hosting:** Submit a support ticket to the hosting provider requesting the OpenSSH update, referencing CVE-2026-35414.

---

# Remediation Roadmap

## Phase 1 - Immediate (Within 48 Hours)

| Item | Action | Owner | Status |
|---|---|---|---|
| C1 | Update Exim mail server | Hosting Provider | Pending |
| C2 | Update OpenSSH | Hosting Provider | Pending |

## Phase 2 - This Week (Within 7 Days)

| Item | Action | Owner | Status |
|---|---|---|---|
| A1-A5, B1-B5 | Deploy security headers via .htaccess | Development Team | Pending |
| A6, B6 | Deploy Cloudflare WAF | IT / DevOps | Pending |
| A6, B6 | Restrict admin port access | Hosting Provider | Pending |
| A6, B6 | Hide server version information | Development Team | Pending |

## Phase 3 - Next Sprint (Within 14 Days)

| Item | Action | Owner | Status |
|---|---|---|---|
| A6, B6 | Add rate limiting to form endpoints | Development Team | Pending |
| B7 | Publish privacy policy and legal pages | Legal / Content Team | Pending |
| -- | Schedule follow-up VAPT scan to verify fixes | Security Team | Pending |

---

## Summary of Impact

Once all the above improvements are implemented:

- All 5 application security headers will be in place, protecting against XSS, clickjacking, and data leakage
- Server software will be up to date, closing the 2 known high-severity vulnerabilities
- A Web Application Firewall will filter malicious traffic before it reaches the server
- Form endpoints will be protected against automated abuse
- Server information will no longer be exposed to external scanners
- Both the beta and production sites will meet industry-standard security benchmarks

---

*Report based on VAPT assessment dated April 13, 2026.*  
*Recommended follow-up scan: After remediation is complete (target: May 2026).*
