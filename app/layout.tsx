import { Footer, NavBar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DriveFlix",
  description: "Discover your next car dream",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-cyan-800">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
