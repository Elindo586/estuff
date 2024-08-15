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
          title="facebook link"
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
          alt="instagram icon"
          title="instagram link"
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
          alt="linkedin icon"
          title="linkedin link"
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
          alt="snapchat icon"
          title="snapchat link"
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
          alt="tiktok icon"
          title="tiktok link"
          id="facebook"
          // width={16}
          // height={16}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/youtube16.png"
          alt="youtube icon"
          title="youtube link"
          id="facebook"
          // width={16}
          // height={16}
          sizes="100vw"
        />
      </div>
    </div>
  );
}
