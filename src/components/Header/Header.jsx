import { useContext } from 'react'
import { Link } from 'react-router'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import styles from './Header.module.css'

export default function Header() {
  const { favorites } = useContext(FavoritesContext)

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link to="/">Bibliothèque</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li>Favoris : {favorites.length}</li>
        </ul>
      </nav>
    </header>
  )
}
