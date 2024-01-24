// STYLE
import styles from "./main.module.css";

// FLAGS
import ReactCountryFlag from "react-country-flag";

// IMAGE
import logo from "../../../public/logo.webp";
import tiktok from "../../../public/icons/Icono tiktok.png";
import twitter from "../../../public/icons/Icono x twiter.png";
import facebook from "../../../public/icons/Icono Facebook.png";
import instagram from "../../../public/icons/Icono instagram.png";

export default function Dealers() {
  return (
    <section id="dealers" className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.item}>
          <h1 className={styles.title}>DISTRIBUTOR</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            vel assumenda sapiente tempore recusandae animi minus sint saepe
            quam perspiciatis!
          </p>
          <div className={styles.flags}>
            <ReactCountryFlag className={styles.flag} countryCode="US" svg />
            <ReactCountryFlag className={styles.flag} countryCode="AR" svg />
            <ReactCountryFlag className={styles.flag} countryCode="BR" svg />
            <ReactCountryFlag className={styles.flag} countryCode="PY" svg />
          </div>
        </div>

        {/* ITEM 2 */}
        <div className={styles.item}>
          <img src={logo} alt="logo" className={styles.logo_img} />
          <div className={styles.logo}>
            <h1 className={styles.logo_title}>Lamborghini</h1>
            <h2 className={styles.logo_subtitle}>Vape</h2>

            <ul className={styles.social_network}>
              <a className={styles.link}>
                <img src={tiktok} alt="tiktok" />
              </a>
              <a className={styles.link}>
                <img src={twitter} alt="twitter" />
              </a>
              <a className={styles.link}>
                <img src={facebook} alt="facebook" />
              </a>
              <a className={styles.link}>
                <img src={instagram} alt="instagram" />
              </a>
            </ul>
          </div>

          <div className={styles.footer}>
            <h3 className={styles.copy}>
              Copyright © 2024 LAMBORHINI. All rights reserved.
            </h3>

            <ul className={styles.lists}>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>

            <p>
              <strong style={{ fontWeight: 500 }}>WARNING:</strong> This product
              can expose you to chemicals including formaldehyde, which is known
              to the State of California to cause cancer, and nicotine, which is
              known to the State of California to cause birth defects or other
              reproductive harm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
