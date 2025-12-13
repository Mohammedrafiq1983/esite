import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "إدارس - منصة التعليم الإلكتروني",
  description: "منصة تعليمية عراقية تربط الطلاب بأفضل المعلمين للتعليم التكميلي",
  keywords: ["تعليم", "دورات", "معلمون", "العراق", "كركوك", "تعليم إلكتروني"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-tajawal antialiased">
        {children}
      </body>
    </html>
  );
}
