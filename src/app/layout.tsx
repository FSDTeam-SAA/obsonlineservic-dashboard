import type { Metadata } from "next";
import { SidebarNavigationController } from "@/components/sheard/SidebarNavigationController";
import "./globals.css";

export const metadata: Metadata = {
  title: "OBS Service Dashboard",
  description: "Online service management dashboard",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SidebarNavigationController />{children}</body>
    </html>
  );
}
