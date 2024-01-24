// COMPONENTS
import Table from "./Table/main";
import Navbar from "../Navbar/main";

// STYLE
import styles from "./main.module.css";

export default function List() {
  return (
    <>
      <Navbar />
      <section
        className={`${styles.container} animate__animated animate__fadeInUp`}
      >
        <h1 className={styles.title}>LIST CLIENTS</h1>
        <div className={styles.table}>
          <h2 className={styles.subtitle}>LIST</h2>
          <Table />
        </div>
      </section>
    </>
  );
}
