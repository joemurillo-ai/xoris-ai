import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XORIS.ai | Capital, Risk, Intelligence",
  description:
    "XORIS helps construction, building materials, manufacturing, and distribution companies access capital, reduce risk, and grow with confidence.",
  icons: {
    icon: "/xoris-mark.svg",
    shortcut: "/xoris-mark.svg",
    apple: "/xoris-mark.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
