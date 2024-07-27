import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="main">
      <p>You found this empty page!</p> <br />
      <p>
        {" "}
        Go to <a href="https://www.tu.biz">main site</a>.
      </p>
    </div>
  );
}
