// app/books/page.js
export const metadata = { title: 'Books · Valentina Elore' };

export default function BooksPage() {
  return (
    <section>
      <h1>Books</h1>

      <ul className="cards">
        {/* ——— Book 1 ——— */}
        <li className="card">
          <h3>The Spiritual Fckboy Field Guide™</h3>
          <p>Decode manipulation hiding behind spiritual masculinity.</p>

          <div className="flex gap-4 mt-3">
            {/* Paperback */}
            <a
              href="https://amzn.to/42670RN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow transition"
            >
              Buy Paperback
            </a>

            {/* Kindle */}
            <a
              href="https://amzn.to/46h4FpC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg shadow transition"
            >
              Buy Kindle
            </a>
          </div>
        </li>

        {/* ——— Book 2 ——— */}
        <li className="card">
          <h3>The Spiritual QueenPin Field Guide™</h3>
          <p>Profiles, red flags, and reclamation for the magnetic feminine.</p>

          <div className="flex gap-4 mt-3">
            {/* Paperback */}
            <a
              href="https://amzn.to/41ynfHb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow transition"
            >
              Buy Paperback
            </a>

            {/* Kindle */}
            <a
              href="https://amzn.to/45J43ci"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg shadow transition"
            >
              Buy Kindle
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
