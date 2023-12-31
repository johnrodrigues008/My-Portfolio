import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/utils/helper'

/* Import components */
import { NavigationSection } from "../components/sections/NavigationSection";
import { FooterSection } from '@/components/sections/FooterSection';


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
      <body className="bg-zinc-900 text-zinc-50 ">
        <NavigationSection />

        <main className="max-w-7xl mx-auto px-4 md:px-8">{children}</main>

        <FooterSection />
      </body>
    </html>
  );
}
