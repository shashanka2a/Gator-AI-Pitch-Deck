import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Gator AI Pitch Deck",
  description: "Revolutionary AI-powered solutions for the future",
  keywords: ["AI", "Artificial Intelligence", "Technology", "Innovation"],
  authors: [{ name: "Gator AI" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Gator AI Pitch Deck",
    description: "Revolutionary AI-powered solutions for the future",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gator AI Pitch Deck",
    description: "Revolutionary AI-powered solutions for the future",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
