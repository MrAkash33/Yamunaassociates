import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RouteWrapper from "@/components/layout/RouteWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yamuna Associations",
  description: "Premium real estate and plot investments around Yamuna Expressway.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <RouteWrapper>{children}</RouteWrapper>
      </body>
    </html>
  );
}
