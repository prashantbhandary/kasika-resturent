import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

// Display face: Fraunces — a warm soft-serif with real character at large sizes.
// Registered under --font-playfair so existing `font-playfair` utilities adopt it.
const playfair = Fraunces({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KASIKA – Asian Dining Indo Bar | Tokorozawa, Saitama",
  description:
    "Experience authentic Indian & Asian dining in Tokorozawa, Saitama. KASIKA offers premium curries, tandoori specialties, biryani, and more in an elegant atmosphere.",
  keywords: ["KASIKA", "Indian restaurant Japan", "Asian dining Saitama", "Tokorozawa Indian food", "カシカ", "インド料理"],
  openGraph: {
    title: "KASIKA – Asian Dining Indo Bar",
    description: "Authentic Indian & Asian Dining Experience in Tokorozawa, Saitama.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-cream text-charcoal antialiased overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
