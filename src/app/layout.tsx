import type { Metadata } from "next";
import "./globals.css";
import { DashboardContextProvider } from "@/context/DashboardContext";

export const metadata: Metadata = {
  title: "Streamify",
  description: "A music streaming analytics dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <DashboardContextProvider>
          {children}
        </DashboardContextProvider>
      </body>
    </html>
  );
}
