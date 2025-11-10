import type { Metadata } from "next"
import "@/styles/globals.css"
import React from "react"

export const metadata: Metadata = {
  title: "Flickr Photo Wall",
  description: "A dynamic photo wall from Flickr",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  )
}
