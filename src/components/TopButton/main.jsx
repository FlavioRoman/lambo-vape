// STYLE
import styles from "./main.module.css";

// REACT ICONS
import { FaArrowUp } from "react-icons/fa";

// REACT SPRING
import { useSpring, animated } from "@react-spring/web";

export default function TopButton() {
  const props = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(1000px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",
    },
  });
  return (
    <>
      <animated.a href="#about" style={props} className={styles.container}>
        {/* <div className={styles.dot}></div> */}
        <a href="#home" className={styles.container_button}>
          <FaArrowUp color="#fff" />
        </a>
      </animated.a>
    </>
  );
}
