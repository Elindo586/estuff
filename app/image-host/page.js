"use client";

import styles from "./styles.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/facebook.png"
          alt="facebook icon"
          title="facebook icon"
          id="facebook"
          // width={16}
          // height={16}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/instagram.png"
          alt="facebook icon"
          title="facebook icon"
          id="facebook"
          // width={16}
          // height={16}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/linkedin.png"
          alt="facebook icon"
          title="facebook icon"
          id="facebook"
          // width={16}
          // height={16}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/snapchat.png"
          alt="facebook icon"
          title="facebook icon"
          id="facebook"
          // width={16}
          // height={16}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/tiktok.png"
          alt="facebook icon"
          title="facebook icon"
          id="facebook"
          // width={16}
          // height={16}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/youtube.png"
          alt="facebook icon"
          title="facebook icon"
          id="facebook"
          // width={16}
          // height={16}
          sizes="100vw"
        />
      </div>
    </div>
  );
}
