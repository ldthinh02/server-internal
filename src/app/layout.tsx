import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Timviecldo.vn - Website tuyển dụng tận tình chu đáo đáp ứng mọi nhu cầu của khách hàng",
  description:
    "Tuyển dụng tận tình chu đáo, miễn phí hoàn toàn với ứng viên, tư vấn, chia sẽ kinh nghiệm xin việc tại các vị trí hấp dẫn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
