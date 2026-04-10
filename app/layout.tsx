import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./index.css";
import AppProvider from "./app-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Arif Hossain | Frontend Web Developer",
  description:
    "Frontend Web Developer specializing in React, Next.js, Vue.js, WordPress and Shopify. Built 250+ responsive, high-performance web applications with a focus on UI/UX, SEO, and Core Web Vitals.",
  keywords: [
    "Md Arif Hossain",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "TypeScript Developer",
    "WordPress Developer",
    "Shopify Developer",
  ],
  authors: [{ name: "Md Arif Hossain" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
