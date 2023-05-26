import '../globals.css'

export const metadata = {
  title: 'Code-Info',
  description: 'Code-Info a place for every programmer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
