export const metadata = { title: 'Books · Valentina Elore' }

export default function BooksPage() {
  return (
    <section>
      <h1>Books</h1>
      <ul className="cards">
        <li className="card">
          <h3>The Spiritual Fkboy Field Guide™</h3>
          <p>Decode manipulation hiding behind spiritual masculinity.</p>
        </li>
        <li className="card">
          <h3>QueenPin Field Guide™</h3>
          <p>Profiles, red flags, and reclamation for the magnetic feminine.</p>
        </li>
      </ul>
    </section>
  )
}
