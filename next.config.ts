import type { NextConfig } from "next";

// Static student/admin app (separate repo & Vercel project), proxied under /app
// so alumnos can log in at braianbarrientos.com.ar/app instead of a second domain.
const APP_ORIGIN = "https://cuatrouno-trainingclub-app.vercel.app";

const nextConfig: NextConfig = {
  // canonical trailing slash so the app's relative asset paths (shared/logo.png,
  // Montserrat/...) resolve under /app/ instead of the domain root. Safe site-wide
  // since this project has no other Next.js routes besides "/".
  trailingSlash: true,
  async rewrites() {
    return [
      { source: "/app/:path*", destination: `${APP_ORIGIN}/:path*` },
    ];
  },
};

export default nextConfig;
