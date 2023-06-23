"use client";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  return (
    <section className={styles.main}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Blog</li>
        </ul>
      </nav>

      {children}
      <button type="button" onClick={() => router.push("/")}>
        Home
      </button>
    </section>
  );
}
