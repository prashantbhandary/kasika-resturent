import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
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
        {children}
      </body>
    </html>
  );
}
