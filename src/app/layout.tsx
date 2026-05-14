import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gianluca Castorina - Portfolio",
  description: "Portfolio de Gianluca Castorina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="bg-bg-base text-zinc-300 font-sans antialiased selection:bg-accent-tech selection:text-white pb-20 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
