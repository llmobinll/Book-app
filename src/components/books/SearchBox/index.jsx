import { BiSearchAlt } from "react-icons/bi";

import styles from "./searchBox.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
      />
      <button onClick={searchHandler}>
        <BiSearchAlt />
      </button>
    </div>
  );
}

export default SearchBox;
