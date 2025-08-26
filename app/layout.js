import './globals.css'

export const metadata = {
  title: 'Valentina Elore',
  description: 'Official site of Valentina Elore · Visionary Rebel Press',
  metadataBase: new URL('https://valentinaelore.com'),
  openGraph: {
    title: 'Valentina Elore',
    description: 'Decode the sacred mask. Reclaim your power.',
    url: 'https://valentinaelore.com',
    siteName: 'Valentina Elore',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valentina Elore',
    description: 'Decode the sacred mask. Reclaim your power.'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <a className="logo" href="/">Valentina <span>Elore</span></a>
            <nav className="nav">
              <a href="/about">About</a>
              <a href="/books">Books</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container">
          {children}
        </main>
        <footer className="site-footer">
          <div className="container">
            <small>© 2025 Valentina Elore · Visionary Rebel Press</small>
          </div>
        </footer>
      </body>
    </html>
  )
}
