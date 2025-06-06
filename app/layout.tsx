import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { WavyBackground } from "@/components/wavy-background";
import { Spotlight } from "@/components/spotlight";
import './fonts.css'
import { cn } from "@/lib/utils";
import './styles.css'
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumit's Portfolio",
  description: "Just little bit details about me :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "overflow-x-hidden")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Spotlight
            className="absolute top-40 left-0 md:left-60 md:-top-20 hidden lg:flex"
            fill="white"
          />
          <WavyBackground className="mx-auto w-full">
            {children}
          </WavyBackground>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
