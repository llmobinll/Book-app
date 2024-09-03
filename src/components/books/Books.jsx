import { useState } from "react";

import { books as booksData } from "../../constants/mockData";

import BookCard from "./BookCards/BookCard";
import FavoriteList from "./FavoriteCards/FavoriteList";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox";

function Books() {
  const [books, setBooks] = useState(booksData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState("");

  const handleLikeList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id != book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = booksData.filter((book) =>
        book.title.toLocaleLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else setBooks(booksData);
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />

      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((books) => (
            <BookCard
              key={books.id}
              data={books}
              handleLikeList={handleLikeList}
              liked={liked}
            />
          ))}
        </div>

        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            <FavoriteList liked={liked} />
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
