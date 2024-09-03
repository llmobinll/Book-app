import styles from "./Favorite.module.css";

function FavoriteList({ liked }) {
  console.log(liked);
  return liked.map((item) => (
    <div className={styles.container} key={item.id}>
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
    </div>
  ));
}

export default FavoriteList;
