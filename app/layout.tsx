import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nunapp — Sound therapy for tinnitus relief",
  description: "Nunapp uses evidence-based notch therapy to help you manage tinnitus.",
  keywords: ["tinnitus", "sound therapy", "notch therapy", "tinnitus relief"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
