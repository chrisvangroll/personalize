import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./_redux/provider";
import Header from "./_components/Header";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sitecore Personalize Demo",
  description: "Sitecore Personalize Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}


