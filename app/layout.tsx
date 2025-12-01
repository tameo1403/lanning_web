import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosProvider } from "./providers";
import HeaderPage from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  icons: {
    icon: "/icon.ico", // đường dẫn trong thư mục public
    shortcut: "/icon.ico", // optional, favicon cho browser
  },
  title: "Thuê Lập Trình Web Chuyên Nghiệp | Next.js Service",
  description:
    "Dịch vụ lập trình web thuê chuyên nghiệp bằng Next.js. Website chuẩn SEO, responsive, tốc độ nhanh, tối ưu trải nghiệm người dùng.",
  keywords:
    "thuê lập trình web, dịch vụ web, thiết kế web Next.js, web chuẩn SEO, responsive, performance",
  openGraph: {
    title: "Thuê Lập Trình Web Chuyên Nghiệp | Next.js Service",
    description:
      "Dịch vụ lập trình web thuê chuyên nghiệp với Next.js. Website chuẩn SEO, responsive, tốc độ nhanh.",
    type: "website",
    url: "https://yourdomain.com",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thuê Lập Trình Web Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thuê Lập Trình Web Chuyên Nghiệp | Next.js Service",
    description:
      "Dịch vụ lập trình web thuê chuyên nghiệp với Next.js. Website chuẩn SEO, responsive, tốc độ nhanh.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderPage />
        <Hero />
        <AosProvider>
          {children}

          {/* Schema JSON-LD Service */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Thuê lập trình web Next.js",
                description:
                  "Dịch vụ lập trình web thuê chuyên nghiệp bằng Next.js. Website chuẩn SEO, responsive, tốc độ nhanh.",
                provider: {
                  "@type": "Organization",
                  name: "My Landing Page",
                  url: "https://yourdomain.com",
                },
              }),
            }}
          />
        </AosProvider>
        <Footer />
      </body>
    </html>
  );
}
