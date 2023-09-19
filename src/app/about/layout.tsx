import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'About',
    description: 'Información necesaria sobre mi pagina.',
  }
const layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <main className='flex min-h-screen flex-col items-center p-10'>
        {children}
    </main>
  )
}

export default layout