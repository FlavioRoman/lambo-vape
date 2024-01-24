/* eslint-disable react/prop-types */

// STYLE
import styles from "./main.module.css";

// COMPONENT
import { PRODUCTS } from "../../constant/main";

export default function ColorSelect({ position, handleColor }) {
  return (
    <>
      <div className={styles.container_color} style={{ position }}>
        <ul className={styles.colors}>
          {PRODUCTS.map((value) => {
            return (
              <div
                key={value.id}
                style={{
                  backgroundColor: `${value.bgColor}`,
                }}
                onClick={() => {
                  handleColor({
                    number: value.id,
                    name: value.name,
                    bgColor: value.bgColor,
                    img: value.img,
                  });
                }}
                className={styles.color}
              >
                <span
                  className={styles.tooltip}
                  style={{
                    color: `${value.textColor}`,
                    backgroundColor: `${
                      PRODUCTS.id == "01" ? "#fff" : value.bgColor
                    }`,
                  }}
                >
                  {value.name}
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
