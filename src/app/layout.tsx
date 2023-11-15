import './globals.scss'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <PrimeReactProvider>
        <body>{children}</body>
      </PrimeReactProvider>
    </html>
  )
}
