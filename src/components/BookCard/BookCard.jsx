import { Link } from 'react-router'
import styles from './BookCard.module.css'

export default function BookCard({ id, cover, title, author, date }) {
    return (
        <li>
            <Link className={styles.bookCard} to={`/books/${id}`}>
                <img className={styles.bookCover} src={cover} alt="" />
                <div className={styles.bookContent}>
                    <h3 className={styles.bookTitle}>{title}</h3>
                    <p className={styles.bookMeta}>
                        <span className={styles.bookAuthor}>{author}</span>
                        <time dateTime={date}>{date}</time>
                    </p>
                </div>
            </Link>
        </li>
    )
}
