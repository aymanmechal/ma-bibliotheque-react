# Ma bibliothèque — React

Application React (Vite) de recherche de livres avec l'API Google Books.

## Fonctionnalités

- Recherche de livres (Google Books API)
- Page de détail d'un livre (`/books/:id`) avec React Router
- Favoris partagés avec un Context (compteur dans le Header)
- Layout commun (Header + Footer) avec `Outlet`

## Lancement

1. Copier `.env.example` en `.env` et mettre sa clé Google Books :

```
VITE_GOOGLE_BOOKS_API_KEY=ta_cle
```

2. Installer et lancer :

```sh
npm install
npm run dev
```

## Architecture

```text
src/
  main.jsx            StrictMode > BrowserRouter > FavoritesProvider > App
  App.jsx             Routes
  api/books.js        Appels à l'API Google Books
  hooks/              useBooks, useBook
  contexts/           FavoritesContext, FavoritesProvider
  components/         Layout, Header, Footer, BookCard
  pages/              Home, Book
  styles/global.css   Variables CSS et styles de base
```
