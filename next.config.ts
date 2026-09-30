import path from "node:path";
import type { NextConfig } from "next";

// Static CSP, set here so every page can be prerendered and served from
// Vercel's CDN (a per-request nonce would force every page to render on the
// server on every visit). 'unsafe-inline' in script-src covers Next.js's inline
// hydration scripts and the JSON-LD block. Fonts are self-hosted at build time
// by next/font, and there are no third-party scripts, cookies or embeds.
// When Google Analytics is added later, add its hosts here (see the other
// client sites) and put the consent banner back.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "img-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
};

export default nextConfig;
