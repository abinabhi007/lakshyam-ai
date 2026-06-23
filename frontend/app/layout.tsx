import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Lakshyam AI - Build Better Resumes, Ace Every Interview",
  description: "AI-powered resume analysis, ATS optimization, and mock interview coaching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


