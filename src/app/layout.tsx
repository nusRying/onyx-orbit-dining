import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import FixedCanvas from "@/components/layout/FixedCanvas";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "L'Experience - High-End Dining",
  description: "A state-of-the-art immersive restaurant experience.",
};

import Navbar from "@/components/layout/Navbar";
import MenuOverlay from "@/components/layout/MenuOverlay";
import CustomCursor from "@/components/shared/CustomCursor";
import NarrativeOverlay from "@/components/layout/NarrativeOverlay";
import AudioToggle from "@/components/shared/AudioToggle";
import Preloader from "@/components/layout/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Preloader />
        <SmoothScroll>
          <CustomCursor />
          <AudioToggle />
          <Navbar />
          <MenuOverlay />
          <FixedCanvas />
          <NarrativeOverlay />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
