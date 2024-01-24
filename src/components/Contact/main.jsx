// STYLES
import styles from "./main.module.css";

// MATERIAL UI
import { Button, TextField } from "@mui/material";

// IMAGE
import logo from "../../../public/logo.webp";
import tiktok from "../../../public/icons/Icono tiktok.png";
import twitter from "../../../public/icons/Icono x twiter.png";
import facebook from "../../../public/icons/Icono Facebook.png";
import instagram from "../../../public/icons/Icono instagram.png";

export default function Contact() {
  return (
    <>
      <section id="contact" className={styles.container}>
        <div className={styles.flex}>
          {/* ITEM 1 */}
          <div className={styles.item}>
            <form action="" className={styles.form}>
              <h1 className={styles.title}>CONTACT US</h1>
              <TextField
                sx={{ width: "100%" }}
                label="ENTER YOUR NAME"
                variant="standard"
              />
              <TextField
                sx={{ width: "100%" }}
                variant="standard"
                label="ENTER YOUR EMAIL"
              />
              <TextField
                sx={{ width: "100%" }}
                label="ENTER A OBSERVATION"
                variant="standard"
              />
              <Button type="button" sx={{ width: "100%" }} variant="outlined">
                SEND
              </Button>
            </form>
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
                <strong style={{ fontWeight: 500 }}>WARNING:</strong> This
                product can expose you to chemicals including formaldehyde,
                which is known to the State of California to cause cancer, and
                nicotine, which is known to the State of California to cause
                birth defects or other reproductive harm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
