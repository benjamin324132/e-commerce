import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";


const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "GO24 Bookstore",
    template: ` %s | GO24 Bookstore`
  },
  description: "Find your next book",
  keywords: [
    "Books",
    "E-commerce",
    "Next js",
    "React",
    "Prisma",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Benjamin",
      url: "https://github.com/benjamin324132",
    },
  ],
  creator: "shadcn",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: "GO24 Bookstore",
    description: "Find your next book",
    siteName: "GO24 Bookstore",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
