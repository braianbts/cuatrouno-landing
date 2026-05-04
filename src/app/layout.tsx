import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cuatrouno Training Club | Asesorías Online 1:1",
  description:
    "Transformá tu cuerpo con un sistema claro: entrenamiento personalizado, guía de alimentación y seguimiento 1:1 con Braian Barrientos. Planes desde 12 semanas.",
  icons: [
    { rel: "icon", url: "/favicon-dark.png",  media: "(prefers-color-scheme: dark)" },
    { rel: "icon", url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Cuatrouno Training Club",
    title: "Cuatrouno Training Club | Asesorías Online 1:1",
    description:
      "Transformá tu cuerpo con un sistema claro: entrenamiento personalizado, guía de alimentación y seguimiento 1:1 con Braian Barrientos. Planes desde 12 semanas.",
    images: [
      {
        url: "/og-image.png",
        width: 1000,
        height: 1000,
        alt: "Cuatrouno Training Club — Braian Barrientos",
      },
    ],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuatrouno Training Club | Asesorías Online 1:1",
    description:
      "Transformá tu cuerpo con un sistema claro: entrenamiento personalizado, guía de alimentación y seguimiento 1:1 con Braian Barrientos.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
