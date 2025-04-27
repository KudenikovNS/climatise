import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Climatise -  vodilna platforma za poročanje o trajnosti",
  description: "Močna platforma za poročanje o trajnosti in analizo podnebnih sprememb",
};

const interRegular = Inter({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
  variable: "--font-inter-regular",
});

const interMedium = Inter({
  subsets: ["latin", "cyrillic"],
  weight: "500",
  display: "swap",
  variable: "--font-inter-medium",
});

const dmSansRegular = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dm-sans-regular",
});

const dmSansMedium = DM_Sans({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-dm-sans-medium",
});

const dmSansBold = DM_Sans({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-dm-sans-bold",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
      ${interRegular.variable} 
      ${interMedium.variable} 
      ${dmSansRegular.variable} 
      ${dmSansMedium.variable} 
      ${dmSansBold.variable}
    `}>
        {children}
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", width: "100%" }}>
         {/*  <Footer /> */}
        </div>
      </body>
    </html>
  );
}
