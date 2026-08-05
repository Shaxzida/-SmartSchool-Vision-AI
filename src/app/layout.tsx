import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SmartSchool Vision AI',
  description: 'AI-powered School Safety Platform — Demo MVP'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
