import "./globals.css";
import { Metadata } from "next";
import SmoothScroll from "../components/SmoothScroll";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  variable: "--font-cormorant",
  fallback: ["Georgia", "serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Design by Supriya",
  description: "Official website of Design by Supriya",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="font-inter">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

