import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MD. Tanzid Ahmed — Software Quality Assurance Engineer",
  description:
    "Portfolio of MD. Tanzid Ahmed, a Software Quality Assurance Engineer specializing in manual testing, automation, API testing, and performance testing.",
  generator: "v0.app",
  keywords: [
    "SQA",
    "QA Engineer",
    "Software Testing",
    "Selenium",
    "Cypress",
    "Postman",
    "JMeter",
    "Automation Testing",
  ],
  authors: [{ name: "MD. Tanzid Ahmed" }],
}

export const viewport: Viewport = {
  themeColor: "#0b0b1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
