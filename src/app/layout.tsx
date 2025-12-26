import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "catno.ai - AI Voice Agent Agency",
  description:
    "Transform your business with intelligent AI voice agents. catno.ai delivers cutting-edge conversational AI solutions.",
  keywords: ["AI", "voice agents", "conversational AI", "automation", "AI agency"],
  authors: [{ name: "catno.ai" }],
  openGraph: {
    title: "catno.ai - AI Voice Agent Agency",
    description:
      "Transform your business with intelligent AI voice agents. catno.ai delivers cutting-edge conversational AI solutions.",
    url: "https://catno.ai",
    siteName: "catno.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "catno.ai - AI Voice Agent Agency",
    description:
      "Transform your business with intelligent AI voice agents. catno.ai delivers cutting-edge conversational AI solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
