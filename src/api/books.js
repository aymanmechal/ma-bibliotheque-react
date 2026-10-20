const MAX_RESULTS = 12;

export async function fetchBooks(query) {
console.log('Fetching books for queryveere:', query);
  const url = new URL("https://www.googleapis.com/books/v1/volumes");
  url.searchParams.set("q", query);
  url.searchParams.set("key", import.meta.env.VITE_GOOGLE_BOOKS_API_KEY);
  url.searchParams.set("maxResults", MAX_RESULTS);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const bookResult = await response.json();

    return bookResult;
  } catch (error) {
    console.error("Error fetching books:", error);

    throw error;
  }
}

export async function fetchBook(id) {
  const url = new URL(`https://www.googleapis.com/books/v1/volumes/${id}`);
  url.searchParams.set("key", import.meta.env.VITE_GOOGLE_BOOKS_API_KEY);

  const response = await fetch(url);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const bookResult = await response.json();

  return bookResult;
}
