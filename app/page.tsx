import React from "react";
import styles from "./page.module.css";

import ImageBox from "./components/ImageBox";

export default function Page() {
  return (
    <div className={styles.page}>
      <ImageBox size="large" src="" alt="" />
      <div className={styles["page__row"]}>
        <ImageBox size="small" src="" alt="" />
        <ImageBox size="small" src="" alt="" />
      </div>
      <div className={styles["page__row"]}>
        <ImageBox size="small" src="" alt="" />
        <ImageBox size="small" src="" alt="" />
      </div>
      <div className={styles["page__row"]}>
        <ImageBox size="small" src="" alt="" />
        <ImageBox size="small" src="" alt="" />
      </div>
    </div>
  );
}
