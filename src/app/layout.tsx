import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Historia",
  description: "Explore Historical Connections Across Time And Space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex justify-center items-center p-4">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-10">
                <NavigationMenuItem>
                  <Link href="/">Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/settings">Settings</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </header>
          <main>
            {children}
          </main> 
        </ThemeProvider>
      </body>
    </html>
  );
}
