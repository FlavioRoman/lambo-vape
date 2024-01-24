// STYLE
import styles from "./main.module.css";

// IMAGE
import video from "../../../public/video.mp4";

// REACT / HOOK
import { useEffect, useState } from "react";

// CONSTANS VALUES
import { PRODUCTS } from "../../constant/main";

export default function Hero() {
  const [count, setCount] = useState(0);
  const [animationClass, setAnimationClass] = useState(
    "animate__animated animate__fadeInLeft"
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((prev) => prev + 1);
      if (count > 13) {
        setCount(0);
      }
      if (count == 0) {
        setAnimationClass("animate__animated animate__fadeInLeft");
      }
      setAnimationClass("animate__animated animate__fadeInRight");
    }, 2000);
    return () => {
      clearInterval(intervalID);
    };
  }, [count]);

  return (
    <>
      <section id="home" className={styles.container}>
        {/* ITEM */}
        <div className={styles.item}>
          <video className={styles.video} autoPlay loop muted>
            <source src={video} />
          </video>

          <div className={styles.container_image}>
            {/* <img alt="image" src={logo} className={styles.logo} /> */}
            <div className={styles.logo}>
              <h1 className={styles.title}>Lamborghini</h1>
              <h2 className={styles.subtitle}>Vape</h2>
            </div>
          </div>
          <p className={styles.desc}>
            Un vape fácil de usar con un diseño elegante. Disfruta de sabores
            intensos en cada bocanada. Tu experiencia de vapeo, simplificada.
          </p>
        </div>

        {/* ITEM */}
        <div
          className={`${styles.item} animate__animated animate__fadeIn`}
          onAnimationEnd={() => {
            setAnimationClass("");
          }}
        >
          <div className={`${styles.color} ${animationClass}`}>
            <h3
              className={styles.name}
              style={{
                color: `${
                  PRODUCTS[count].id == 0 ? "#fff" : PRODUCTS[count].bgColor
                }`,
              }}
            >
              {PRODUCTS[count].name}
            </h3>
            <img
              alt="vape"
              src={PRODUCTS[count].img[0]}
              className={`${styles.vape} `}
            />
          </div>
          <div className={styles.footer_logo}>
            <h1 className={styles.footer_logo_title}>Lamborghini</h1>
            <h2 className={styles.footer_logo_subtitle}>Vape</h2>
          </div>
        </div>
      </section>
    </>
  );
}
