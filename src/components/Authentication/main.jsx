// REACT HOOK
import { useState } from "react";

// STYLES
import styles from "./main.module.css";

// COMPONENT
import ModalFail from "../Modals/Fail";
import ModalCheck from "../Modals/Check";
import ModalDuplicate from "../Modals/Duplicate";
import ModalAuthentic from "../Modals/Authentic";

// MATERIAL UI
import { Button, TextField } from "@mui/material";

// IMAGE
import ticketScracht from "../../../public/ticketScrach05.gif";

export default function Authentication() {
  const [modal, setModal] = useState({
    fail: false,
    check: false,
    authentic: false,
    duplicate: false,
  });

  return (
    <>
      <section id="authentication" className={styles.container}>
        <div className={styles.flex}>
          {/* ITEM 1 */}
          <div className={styles.item}>
            <form action="" className={styles.form}>
              <h1 className={styles.title}>AUTHENTICATION</h1>
              <h3 className={styles.subtitle}>
                CHECK TO SEE IF YOU HAVE AN AUTHENTIC LAMBORGHINI VAPE
              </h3>
              <TextField
                sx={{ width: "100%" }}
                label="ENTER YOUR PRODUCT SKU CODE"
                variant="standard"
              />
              <Button
                type="button"
                sx={{ width: "100%" }}
                variant="outlined"
                onClick={() => setModal(true)}
              >
                CHECK
              </Button>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium eos architecto sint omnis soluta nam. Corporis porro
                possimus repudiandae ad!
              </p>
            </form>
          </div>

          {/* ITEM 2 */}
          <div className={styles.item}>
            <img src={ticketScracht} alt="logo" className={styles.ticketGif} />
            <div className={styles.logo}>
              <h1 className={styles.logo_title}>Lamborghini</h1>
              <h2 className={styles.logo_subtitle}>Vape</h2>
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

      {/* MODAL */}
      {modal.check && <ModalCheck setModal={setModal} />}
      {modal.fail && <ModalFail setModal={setModal} />}
      {modal.authentic && <ModalAuthentic setModal={setModal} />}
      {modal.duplicate && <ModalDuplicate setModal={setModal} />}
    </>
  );
}
