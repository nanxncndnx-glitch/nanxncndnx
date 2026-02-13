import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const jersey10 = Jersey_10({ 
  weight: ['400'],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Your Name - Blog",
  description: "Personal blog, book reviews, and documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jersey10.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
