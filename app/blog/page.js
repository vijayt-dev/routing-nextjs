import styles from "../page.module.css";
import PostList from "./post-list";

export default function Blog() {
  return (
    <main className={styles.main}>
      <PostList />
    </main>
  );
}
