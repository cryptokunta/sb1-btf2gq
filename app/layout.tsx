import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Sidebar } from '@/components/layout/sidebar'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/components/auth/auth-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoLinkDAO Platform',
  description: 'A modular platform for community engagement and resource management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen relative">
              <div 
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80")',
                  backgroundBlendMode: 'overlay'
                }}
              />
              
              <div className="relative z-10">
                <Navigation />
                <div className="flex">
                  <Sidebar />
                  <main className="flex-1 pl-16 container mx-auto px-4 py-8">
                    {children}
                  </main>
                </div>
              </div>
            </div>
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}