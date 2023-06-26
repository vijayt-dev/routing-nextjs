'use client'
 
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong! {error.toString()}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}