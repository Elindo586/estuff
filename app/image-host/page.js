"use client";

import styles from "./styles.module.css";
import Image from "next/image";

export default function Page({ children }) {
  return (
    <div>
      <div className={styles.facebook}>
        <Image
          fill={true}
          src="/images/social-icons/facebook.png"
          id="facebook"
          alt="facebook icon"
          title="facebook icon"
          // width={16}
          // height={16}
          sizes="100vw"
        />
      </div>
    </div>
  );
}
