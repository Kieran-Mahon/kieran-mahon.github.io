"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";

export default function RootLayout({ children }) {

  const path = usePathname();

  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#dcfcfd]">
        <header>
          <Navbar page={path} />
        </header>
        {children}
      </body>
    </html>
  );
}
