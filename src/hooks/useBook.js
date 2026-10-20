import { fetchBook } from '../api/books'
import { useState, useEffect } from 'react'

export default function useBook(id) {
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBookData = async () => {
      setLoading(true)
      setError(null)

      try {
        const bookResult = await fetchBook(id)
        setBook(bookResult)
      } catch {
        setError('Impossible de charger ce livre. Réessayez plus tard.')
      } finally {
        setLoading(false)
      }
    }

    fetchBookData()
  }, [id])

  return { book, loading, error }
}
