import { useContext } from 'react'
import { Link, useParams } from 'react-router'
import bookCover from '../../assets/moby-dick.png'
import useBook from '../../hooks/useBook'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import styles from './Book.module.css'

export default function Book() {
  const { id } = useParams()
  const { book, loading, error } = useBook(id)
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  if (loading) {
    return (
      <main className={styles.page}>
        <p className={styles.message}>Chargement du livre...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className={styles.page}>
        <p className={styles.message}>{error}</p>
      </main>
    )
  }

  if (!book) {
    return (
      <main className={styles.page}>
        <p className={styles.message}>
          Aucun livre ne correspond à cet identifiant. <Link to="/">Retour à la bibliothèque</Link>
        </p>
      </main>
    )
  }

  const info = book.volumeInfo
  const isFavorite = favorites.includes(id)

  return (
    <main className={styles.page}>
      <article className={styles.bookDetail}>
        <div className={styles.bookSidebar}>
          <img
            className={styles.detailCover}
            src={info.imageLinks?.thumbnail || bookCover}
            alt={`Couverture du livre ${info.title}`}
          />
          <div className={styles.bookActions}>
            <button
              className={[styles.bookAction, styles.primary].join(' ')}
              type="button"
              onClick={() => toggleFavorite(id)}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {isFavorite ? 'remove_circle' : 'add_circle'}
              </span>
              {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
            <a className={styles.bookAction} href="#resume">
              <span className="material-symbols-outlined" aria-hidden="true">
                menu_book
              </span>
              Lire le résumé
            </a>
          </div>
        </div>

        <div className={styles.bookInformation}>
          <nav className={styles.breadcrumb} aria-label="Fil d’Ariane">
            <ol>
              <li><Link to="/">Bibliothèque</Link></li>
              <li aria-current="page">{info.title}</li>
            </ol>
          </nav>

          <h1>{info.title}</h1>
          <p className={styles.detailAuthor}>{info.authors?.join(', ') || 'Auteur inconnu'}</p>

          <dl className={styles.detailMetadata}>
            <div>
              <dt>
                <span className="material-symbols-outlined" aria-hidden="true">
                calendar_today
              </span><span className={styles.visuallyHidden}>Première publication</span>
              </dt>
              <dd><time dateTime={info.publishedDate}>{info.publishedDate || 'Date inconnue'}</time></dd>
            </div>
            <div>
              <dt>
                <span className="material-symbols-outlined" aria-hidden="true">
                translate
              </span><span className={styles.visuallyHidden}>Langue</span>
              </dt>
              <dd>{info.language || 'Langue inconnue'}</dd>
            </div>
            <div>
              <dt>
                <span className="material-symbols-outlined" aria-hidden="true">
                auto_stories
              </span><span className={styles.visuallyHidden}>Genre</span>
              </dt>
              <dd>{info.categories?.[0] || 'Genre inconnu'}</dd>
            </div>
          </dl>

          <section className={styles.bookSummary} id="resume">
            <h2 className={styles.visuallyHidden}>Présentation du livre</h2>
            <p>{info.description?.replace(/<[^>]*>/g, '') || 'Aucun résumé disponible.'}</p>
          </section>
        </div>
      </article>
    </main>
  )
}
