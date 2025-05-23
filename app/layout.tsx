import type React from "react"
import type { Metadata } from "next"
import { Inter, Metal_Mania } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const metalMania = Metal_Mania({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-metal-mania",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shattered Colors | Official Band Website",
  description: "The official website of Shattered Colors. Check out our music, upcoming shows, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${metalMania.variable} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
