import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Local Competitor Price Tracker',
  description: 'Track competitor pricing for local businesses. Get instant alerts when competitors change prices or opportunities arise.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9e7cf300-19bd-4c75-9211-9bf4513bd702"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
