"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Page() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div className={styles.body}>
      <Head></Head>
      <table
        width="99%"
        cellspacing="0"
        cellpadding="0"
        className={styles.tablemain}
      >
        <tr>
          <td style={{ marginLeft: "auto", marginRight: "auto" }}>
            {/* Main Container */}
            <table
              width="1000"
              border="0"
              cellspacing="0"
              cellpadding="0"
              className={styles.containerstyle}
            >
              <tr>
                <td>
                  <h1 className={styles.techunion}>Technical Union</h1>
                  <p>by Edgar Lindo</p>
                  <p>Automatización de Maquinaria</p>
                  <p>Hidráulica | Neumática | Eléctrica | Mecánica</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}
