"use client";

import styles from "./styles.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/facebook24.png"
          alt="facebook icon"
          title="facebook link"
          id="imageId"
          // width={24}
          // height={24}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/instagram24.png"
          alt="instagram icon"
          title="instagram link"
          id="imageId"
          // width={24}
          // height={24}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/linkedin24.png"
          alt="linkedin icon"
          title="linkedin link"
          id="imageId"
          // width={24}
          // height={24}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/snapchat24.png"
          alt="snapchat icon"
          title="snapchat link"
          id="imageId"
          // width={24}
          // height={24}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/tiktok24.png"
          alt="tiktok icon"
          title="tiktok link"
          id="imageId"
          // width={24}
          // height={24}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrap}>
        <Image
          fill={true}
          src="/images/social-icons/youtube24.png"
          alt="youtube icon"
          title="youtube link"
          id="imageId"
          // width={24}
          // height={24}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrapA10v}>
        <Image
          fill={true}
          src="/images/products/rexrothpump-5.png"
          alt="Rexroth"
          title="Rexroth Pump Replacement"
          id="imageId"
          // width={263}
          // height={191}
          sizes="100vw"
        />
      </div>
      <div className={styles.wraplinearguides}>
        <Image
          fill={true}
          src="/images/products/linear-guides263.png"
          alt="Linear Guide"
          title="Linear Guide"
          id="imageId"
          // width={263}
          // height={165}
          sizes="100vw"
        />
      </div>
      <div className={styles.wrapcharlynn}>
        <Image
          fill={true}
          src="/images/products/charlynn263.png"
          alt="Charlynn replacement"
          title="Charlynn replacement"
          id="imageId"
          // width={263}
          // height={166}
          sizes="100vw"
        />
        
      </div>
      <div className={styles.wrapcontroller}>
        <Image
          fill={true}
          src="/images/products/controller.png"
          alt="Charlynn replacement"
          title="Charlynn replacement"
          id="imageId"
          // width={263}
          // height={166}
          sizes="100vw"
        />
        
      </div>
    </div>
  );
}
