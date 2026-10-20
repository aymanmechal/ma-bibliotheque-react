import { Routes, Route } from 'react-router'
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Book from './pages/Book/Book.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<Book />} />
      </Route>
    </Routes>
  )
}
