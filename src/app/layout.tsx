import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagasa Anandes | Front-End Developer Portfolio",
  description: "Portfolio Nagasa Anandes | Front-End Developer React & Flutter with a focus on modern UI/UX and high performance.",
  keywords: [
    "Nagasa Anandes",
    "Front-End Developer",
    "React Developer",
    "Flutter Developer",
    "UI UX Designer",
    "Portfolio",
    "Freelancer",
  ],
  metadataBase: new URL("https://nagasaanandes-portfolio.vercel.app"),
  openGraph: {
    title: "Nagasa Anandes | Front-End Developer",
    description: "My work and projects are in the field of React, Flutter, and interface design.",
    url: "https://nagasaanandes-portfolio.vercel.app/",
    siteName: "Nagasa Anandes Portfolio",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Preview Portfolio Nagasa Anandes Putra Ramadhan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "profile.svg",
    shortcut: "profile.svg",
    apple: "profile.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
