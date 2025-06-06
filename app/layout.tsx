import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";


const merriweather = Merriweather({
  variable: "--font-Merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Nagasa Anandes Putra Ramadhan",
  description: "Welcome to my web portfolio",
  icons: {
    icon: "favicon.svg",
    shortcut: "favicon.svg",
    apple: "favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable}`}>
      <body
        className="antialiased bg-background text-foreground"
      >
        {children}
      </body>
    </html>
  );
}
