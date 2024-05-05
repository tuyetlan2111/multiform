'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./store/provider";
import { useForm } from "react-hook-form";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>{children}
        </body>
      </html>
    </ReduxProvider>
  );
}
