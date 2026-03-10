import type { Metadata } from "next";
import { Poppins, Unbounded } from "next/font/google";
import "./globals.css";
import AnniversaryOfferModal from "@/components/AnniversaryOfferModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Alpha Forex Capital - Prop Trading Simplified",
  description:
    "Elevate Your Prop Trading Career. Gain access to top-tier funding and benefit from a superior profit-sharing model. Achieve financial independence with Alpha Forex Capital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${unbounded.variable} font-sans antialiased`}>
        <AnniversaryOfferModal />
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </body>
    </html>
  );
}
