import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { FloatingActionBar } from "@/components/layout/FloatingActionBar";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND} | Home Loans & Mortgage Experts`,
    template: `%s | ${BRAND}`,
  },
  description:
    "SBI Authorised Channel Partner offering home loans with ₹0 processing fees, fast approval, and multi-bank comparison.",
  metadataBase: new URL("https://homevisionfinance.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="text-[15px] sm:text-base">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingActionBar />
        <WhatsAppFab />
      </body>
    </html>
  );
}
