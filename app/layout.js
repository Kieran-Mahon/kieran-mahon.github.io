import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#dcfcfd]">
        {children}
      </body>
    </html>
  );
}
