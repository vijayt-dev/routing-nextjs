"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  const navLinks = [
    { href: "/dashboard", name: "Dashboard" },
    { href: "/", name: "Blog" },
  ];
  return (
    <nav>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        console.log(link.href);
        return (
          <Link
            className={isActive ? styles.textblue : styles.textblack}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
