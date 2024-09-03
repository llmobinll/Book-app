import { useState } from "react";
import { IoMdHeart } from "react-icons/io";

import styles from "./BookCard.module.css";

function BookCard({ data, handleLikeList, liked }) {
  const { title, author, image, language, pages } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    setLike((like) => !like);
    handleLikeList(data, like);
  };

  return (
    <>
      <div className={styles.card}>
        <img src={image} alt={title} />

        <div className={styles.info}>
          <h1>{title}</h1>
          <p>{author}</p>
          <div>
            <span>{language}</span>
            <span>{pages} pages</span>
          </div>
        </div>
        <button>
          <IoMdHeart
            onClick={likeHandler}
            color={like ? "red" : "#e5e5e5"}
            fontSize="1.8rem"
          />
        </button>
      </div>
    </>
  );
}

export default BookCard;
