import { useState } from 'react'
import { FavoritesContext } from './FavoritesContext'

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(id)) {
        return previousFavorites.filter((favoriteId) => favoriteId !== id)
      }

      return [...previousFavorites, id]
    })
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}
