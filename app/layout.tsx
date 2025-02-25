import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Levi Noppers | Full Stack Developer",
  description:
    "Portfolio of Levi Noppers. Full Stack Developer specializing in creating modern, responsive web applications with React, Next.js, and Tailwind CSS.",
  keywords: [
    "full stack developer",
    "web developer",
    "software engineer",
    "software developer",
    "React developer",
    "Node.js",
    "Next.js",
    "web applications",
    "React",
    "JavaScript",
    "TypeScript",
    "portfolio",
    "levi",
    "noppers",
    "levi noppers",
    "frontend developer",
    "backend developer",
    "web design",
    "responsive design",
    "UI/UX",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "REST API",
    "GraphQL",
    "database",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "agile development"
  ],
  authors: [{ name: "Levi Noppers", url: "https://levinoppers.nl" }],
  creator: "Levi Noppers",
  publisher: "Levi Noppers",
  manifest: "/site.webmanifest",
  applicationName: "Levi Noppers Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Levi Noppers | Full Stack Developer",
    description:
      "Full Stack Developer specializing in creating modern, responsive web applications with React, Node.js, and cutting-edge technologies.",
    type: "website",
    url: "https://levinoppers.nl",
    images: [
      {
        url: "https://levinoppers.nl/code.png",
        width: 1200,
        height: 630,
        alt: "Levi Noppers - Full Stack Developer Portfolio",
      }
    ],
    locale: "en_US",
    siteName: "Levi Noppers Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Noppers | Full Stack Developer",
    description:
      "Full Stack Developer crafting exceptional web experiences. View my portfolio to see my latest projects and technical expertise.",
    images: [
      {
        url: "https://levinoppers.nl/code.png",
        alt: "Levi Noppers - Full Stack Developer Portfolio",
      }
    ],
    creator: "@levinoppers",
    site: "@levinoppers",
  },
  icons: {
    icon: [
      { url: "/code.png", sizes: "any" },
      { url: "/code.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  alternates: {
    canonical: "https://www.levinoppers.nl",
    languages: {
      'en-US': 'https://www.levinoppers.nl',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://www.levinoppers.nl'),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#f0f9ff",
  colorScheme: "light dark"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Levi Noppers",
              url: "https://levinoppers.nl",
              jobTitle: "Full Stack Developer",
              description: "Full Stack Developer specializing in React, Next.js, and modern web technologies",
              image: "https://levinoppers.nl/code.png",
              sameAs: [
                "https://github.com/MonkyMars",
              ],
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Full Stack Development"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased bg-gray-100">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}