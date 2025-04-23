import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Splash Cursor Demo",
  description: "Interactive fluid cursor effect demo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
