import type { Metadata } from "next";
import data from "../../data/yachts.json";
import "./globals.css";

export const metadata: Metadata = {
  title: `${data.brand.name} — ${data.brand.tagline}`,
  description: data.hero.subheading,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
