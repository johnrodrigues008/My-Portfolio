import type { Metadata } from 'next'
import { Roboto, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils/helper'

/* Import components */
import { Navigation } from "../components/Navigation";

const roboto = Roboto({ 
  weight: ["300", "400", "700"],
  subsets: ['latin'],
  variable: "--font-roboto",
})

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: 'Portfólio | John Rodrigues',
  description: 'Esse portfólio tem como objetivo demonstrar minhas habilidades técnicas, pessoais e profissionais, sobre o que sei, tenho e posso desenvolver.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={cn(roboto.className, bebas.variable, "bg-zinc-900 text-zinc-50 ") }>
        <Navigation />  
        {children}
      </body>
    </html>
  )
}
