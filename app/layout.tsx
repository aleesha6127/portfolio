import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aleeshaanas.dev"),
  title: "Aleesha Anas | Software Developer & Full Stack Specialist Portfolio",
  description:
    "Award-winning dark luxury personal portfolio of Aleesha Anas. MCA Graduate specializing in Next.js 15, React 19, Python, Flask, Node.js, and modern full-stack web applications.",
  keywords: [
    "Aleesha Anas",
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Python Developer",
    "Next.js Portfolio",
    "MCA Graduate Portfolio",
    "Kochi Developer",
  ],
  authors: [{ name: "Aleesha Anas" }],
  creator: "Aleesha Anas",
  openGraph: {
    title: "Aleesha Anas | Software Developer Portfolio",
    description:
      "Explore the software development portfolio of Aleesha Anas, featuring React, Next.js, Python, Flask, and full-stack projects.",
    url: "https://aleeshaanas.dev",
    siteName: "Aleesha Anas Portfolio",
    images: [
      {
        url: "/yourphoto_transparent (2).png",
        width: 1200,
        height: 630,
        alt: "Aleesha Anas - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleesha Anas | Software Developer Portfolio",
    description:
      "Award-winning portfolio of Aleesha Anas specializing in React, Next.js, and Python backend engineering.",
    images: ["/yourphoto_transparent (2).png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans bg-[#09090B] text-gray-100 antialiased selection:bg-[#F4B75E] selection:text-[#09090B]`} suppressHydrationWarning>
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
