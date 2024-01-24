// STYLES
import styles from "./main.module.css";

// IMAGE
import logo from "../../../public/lamborghini_text_logo.png";
import img01 from "../../../public/logo.webp";

// REACT ICONS
import ArrowButton from "../ArrowButton/main";

// REACT SPRING
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function About() {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <section id="about" className={styles.container}>
      <Parallax className={styles.parallax} pages={4}>
        {/* PARALLAX 1 */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <h1 className={styles.title}>ABOUT US</h1>
        </ParallaxLayer>

        {/* PARALLAX 2 */}
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <img src={img01} className={styles.image} alt="vape" />
            <ArrowButton href={"#products"} />
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
        </ParallaxLayer>

        {/* PARALLAX 3 */}
        <ParallaxLayer offset={1.5} speed={0.1} style={{ ...alignCenter }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <h2
              className={styles.desc}
              style={{ marginLeft: "auto", textAlign: "right" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, facilis!
            </h2>
          </div>
        </ParallaxLayer>

        {/* PARALLAX 4 */}
        <ParallaxLayer offset={2.5} speed={0.1} style={{ ...alignCenter }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <h2
              className={styles.desc}
              style={{ marginRight: "auto", textAlign: "left" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              itaque?
            </h2>
          </div>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
}
