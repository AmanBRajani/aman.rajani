import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppTransitionProvider from '../components/AppTransitionProvider';
import ScrollToTop from '../components/ScrollToTop';
import ScrollProgress from '../components/ScrollProgress';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aman Rajani | Founder · AI Developer · Full-Stack Engineer",
  description:
    "Aman Rajani — Founder of Veolve, Kartos & Episcan. AI + Full-Stack Developer building intelligent tools and premium digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <ScrollProgress />
        <Navbar />
        <AppTransitionProvider>
          {children}
        </AppTransitionProvider>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
