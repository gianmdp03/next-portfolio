import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "../globals.css";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://gianlucacastorina.vercel.app",
  ),
  title: "Gianluca Castorina - Portfolio",
  description: "Portfolio de Gianluca Castorina",
  verification: {
    google: "haBby92TARYNlNSYZoJYL1Ze2bPcSddKcWUV5ywFTqs",
  },
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html
      lang={lang}
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="bg-bg-base text-zinc-300 font-sans antialiased selection:bg-accent-tech selection:text-white pb-20 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
