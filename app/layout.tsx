import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Civic Automation Systems | Automated RFP Compliance Extraction",
  description:
    "A disconnected, HUBZone-certified data infrastructure firm specializing in zero-integration compliance matrix generation for prime contractors.",
  keywords: ["GovCon", "RFP compliance", "HUBZone", "compliance matrix", "federal contracting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
