/* eslint-disable react/prop-types */

// STYLE
import styles from "./main.module.css";

// REACT ICONS
import { FaArrowDown } from "react-icons/fa";

export default function ArrowButton({ href }) {
  return (
    <>
      <a href={href} className={styles.container}>
        <FaArrowDown className={styles.button} />
      </a>
    </>
  );
}
