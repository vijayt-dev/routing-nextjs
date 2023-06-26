'use client'
 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}