
'use client'
import { useRouter } from 'next/navigation';
import './globals.scss'
import { PrimeReactProvider } from 'primereact/api';
import { useEffect } from 'react';
//lib do toastfy
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    
    <html lang="pt-br">
      <PrimeReactProvider>
        <ToastContainer autoClose={3000}/>
        <body>{children}</body>
      </PrimeReactProvider>
    </html>
  )
}
