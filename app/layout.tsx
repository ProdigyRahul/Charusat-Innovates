import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charusat Innovates | The Brightest Minds at Charusat",
  description:
    "Showcasing the cutting-edge projects and breakthroughs from the brightest minds at CHARUSAT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={font.className}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
