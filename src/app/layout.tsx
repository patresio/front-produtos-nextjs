import { Poppins } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Utilizando MongoDB com Next.js",
  description: "Utilizando MongoDB com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${poppins.className} bg-gradient-to-br from-zinc-900 to-zinc-800 text-zinc-100 h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
