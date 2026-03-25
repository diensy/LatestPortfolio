import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SEO_META } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO_META.title,
  description: SEO_META.description,
  keywords: SEO_META.keywords,
  authors: [{ name: SEO_META.author }],
  creator: SEO_META.author,
  icons: {
    icon: "/Images/Logo/primary logo.png",
    shortcut: "/Images/Logo/primary logo.png",
    apple: "/Images/Logo/primary logo.png",
  },
  openGraph: {
    type: "website",
    url: SEO_META.url,
    title: SEO_META.title,
    description: SEO_META.description,
    siteName: "Dinesh Kumar Sahoo Portfolio",
    images: [{ url: "/Images/Logo/primary logo.png", width: 1200, height: 630, alt: SEO_META.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_META.title,
    description: SEO_META.description,
    images: ["/Images/Logo/primary logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} antialiased bg-zinc-950 text-zinc-50 selection:bg-rose-500/30`}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#18181b",
              color: "#fafafa",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
            },
            success: {
              iconTheme: { primary: "#f43f5e", secondary: "#fff" },
            },
          }}
        />
      </body>
    </html>
  );
}
