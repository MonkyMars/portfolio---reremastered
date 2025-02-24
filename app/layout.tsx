import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Levi Noppers | Full Stack Developer",
  description:
    "Welcome to my professional portfolio. I'm a Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my projects and experience in software development.",
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
    "levi noppers"
  ],
  authors: [{ name: "Levi Noppers" }],
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Levi Noppers | Full Stack Developer",
    description:
      "Full Stack Developer specializing in creating modern, responsive web applications with React, Node.js, and cutting-edge technologies.",
    type: "website",
    url: "https://levinoppers.nl",
    images: ["https://levinoppers.nl/code.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Noppers | Full Stack Developer",
    description:
      "Full Stack Developer crafting exceptional web experiences. View my portfolio to see my latest projects and technical expertise.",
    images: ["https://levinoppers.nl/code.png"],
  },
  icons: {
    icon: "/code.png",
  },
  alternates: {
    canonical: "https://levinoppers.nl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL('https://levinoppers.nl'),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#f0f9ff"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-gray-200/20"
      >
        {children}
      </body>
    </html>
  );
}