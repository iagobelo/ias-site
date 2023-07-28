import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.link}>
        iasmim vieira
      </a>

      <a href="/" className={styles.link}>
        sobre
      </a>
    </header>
  );
}
