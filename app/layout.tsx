import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevTimeGuard — Detect Time Tracking Fraud in Remote Teams',
  description: 'Analyze git commits, screen activity, and work patterns to identify inflated time logs. Built for CTOs and engineering managers at remote companies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0edb63ce-e253-4e94-92b2-cb2f32cb1243"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
