import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "e-Game Marketplace",
  description: "Buy & Sell Gaming Accounts - Free Fire, PUBG, eFootball",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
