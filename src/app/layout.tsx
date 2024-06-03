import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import AppComponent from "@/app/AppComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insure Chain",
  description: "Decentralized Insurance Platform",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppComponent>
          {children}
      </AppComponent>
      </body>
    </html>
  );
}
