import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shidqi Amirul Haq | Front-End Developer",
  description:
    "Welcome to the personal website of Shidqi Amirul Haq, a dedicated Front-End Developer with a passion for creating intuitive and engaging digital experiences. Explore my projects, skills, and get in touch for collaboration.",
  openGraph: {
    type: "website",
    url: "https://shidqiamrlhaq.vercel.app",
    siteName: "Shidqi Amirul Haq | Front-End Developer",
    images: [
      {
        url: "https://shidqiamrlhaq.vercel.app/icon.png",
        alt: "Shidqi Amirul Haq | Front-End Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "container mx-auto h-full font-sans antialiased",
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" forcedTheme="dark">
          <TooltipProvider>
            <main className="relative flex min-h-screen flex-col">
              {children}
            </main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
