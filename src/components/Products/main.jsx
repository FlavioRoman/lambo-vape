// STYLE
import styles from "./main.module.css";

// REACT ICON
import { BiColor } from "react-icons/bi";

// REACT / HOOK
import { useEffect, useState } from "react";

// MATERIAL UI
import { useMediaQuery } from "@mui/material";

// CONSTANTS VALUES
import { PRODUCTS } from "../../constant/main";

// COMPONENT
import ColorSelect from "../ColorSelect/main";
import ModalColor from "../Modals/Colors/Color";

// IMAGES
import logo from "../../../public/lamborghini_text_logo_white.png";

export default function Products() {
  const [id, setId] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState({ color: false });
  const [animated, setAnimated] = useState("animate__animated animate__fadeIn");

  const matches = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    const intervalID = setInterval(() => {
      setAnimated("animate__animated animate__fadeIn");
      setCount((prev) => (prev + 1) % PRODUCTS[0].img.length);
    }, 2000);
    return () => {
      setAnimated("");
      clearInterval(intervalID);
    };
  }, []);

  const handleColor = (data) => {
    setCount(0);
    setAnimated("");
    setId(data.number);
    setModal({ color: false });
  };

  return (
    <>
      <section id="products" className={`${styles.container}`}>
        {/* VAPES */}
        <div className={styles.container_card}>
          <div
            className={`${styles.card} animate__animated animate__fadeInRight`}
            onAnimationEnd={() => setAnimated("")}
          >
            <h4 className={styles.name} style={{ color: `#fff` }}>
              {PRODUCTS[id]?.name}
            </h4>
            <img
              alt="vape"
              src={PRODUCTS[id]?.img[count]}
              className={`${styles.image} ${animated}`}
            />
            <img className={styles.logo} src={logo} alt="logo" />
          </div>
        </div>

        {/* SELECT COLOR / DESKTOP / MOBILE */}
        {matches ? (
          <ColorSelect position={"absolute"} handleColor={handleColor} />
        ) : (
          <button
            className={styles.btn}
            onClick={() => setModal({ color: true })}
          >
            <BiColor color="#000" size={30} />
          </button>
        )}
      </section>

      {/* MODAL */}
      <ModalColor modal={modal} setModal={setModal} handleColor={handleColor} />
    </>
  );
}
