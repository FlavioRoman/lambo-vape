// STYLE
import styles from "./main.module.css";

import icon01 from "../../../public/icons/Icono tiktok.png";
import icon02 from "../../../public/icons/Icono x twiter.png";
import icon03 from "../../../public/icons/Icono Facebook.png";
import icon04 from "../../../public/icons/Icono instagram.png";

export default function Footer() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>CONTACT US</h2>

      <ul className={styles.social_newtork}>
        <li>
          <img height={25} src={icon01} alt="icono" />
        </li>
        <li>
          <img height={25} src={icon02} alt="icono" />
        </li>
        <li>
          <img height={25} src={icon03} alt="icono" />
        </li>
        <li>
          <img height={25} src={icon04} alt="icono" />
        </li>
      </ul>

      <h3 className={styles.copy}>
        Copyright © 2024 LAMBORHINI. All rights reserved.
      </h3>

      <ul className={styles.lists}>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>

      <p>
        <strong style={{ fontWeight: 500 }}>WARNING:</strong> This product can
        expose you to chemicals including formaldehyde, which is known to the
        State of California to cause cancer, and nicotine, which is known to the
        State of California to cause birth defects or other reproductive harm.
      </p>
    </section>
  );
}
