// REACT / HOOK
import { useEffect, useState } from "react";

// FORMIK
import { useFormik } from "formik";

// STYLES
import styles from "./main.module.css";

// MATERIAL UI
import { Button, Grid } from "@mui/material";

// SERVICES
import { Countrys } from "../../services/countrys";

// IMAGE
import logo from "../../../public/logo.webp";
import tiktok from "../../../public/icons/Icono tiktok.png";
import twitter from "../../../public/icons/Icono x twiter.png";
import facebook from "../../../public/icons/Icono Facebook.png";
import instagram from "../../../public/icons/Icono instagram.png";

// COMPONENTS
import CheckBoxComponent from "../Elements/CheckBoxComponent";
import TextFieldComponet from "../Elements/TextFieldComponte";

// INITIAL VALUES / VALIDATIONSCHEMA
import { initialValues, validationSchema } from "./validations";
import AutocompleteSelectTextField from "../Elements/AutocompleteComponent";

export default function Wholesale() {
  const [countrys, setCountrys] = useState([]);

  const onSubmit = () => {
    console.log("onSubmit");
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  useEffect(() => {
    let newArr = [];

    Countrys().then((response) => {
      response.map((value) => {
        newArr.push({ value: value.id_country, label: value.name });
      });
      setCountrys(newArr);
    });
  }, []);

  return (
    <>
      <section id="contact" className={styles.container}>
        <div className={styles.flex}>
          {/* ITEM 1 */}
          <div className={styles.item}>
            <form action="" className={styles.form}>
              <h1 className={styles.title}>CONTACT US</h1>
              <Grid container spacing={0.2}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextFieldComponet
                    formik={formik}
                    width="100%"
                    label="NAME"
                    variant="standard"
                    name="name"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextFieldComponet
                    formik={formik}
                    width="100%"
                    label="LASTNAME"
                    variant="standard"
                    name="lastname"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextFieldComponet
                    formik={formik}
                    width="100%"
                    label="EMAIL"
                    variant="standard"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextFieldComponet
                    formik={formik}
                    width="100%"
                    label="PHONE"
                    variant="standard"
                    name="phone"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextFieldComponet
                    formik={formik}
                    width="100%"
                    label="DIRECTION"
                    variant="standard"
                    name="direction"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <AutocompleteSelectTextField
                    formik={formik}
                    name={"country"}
                    label="COUNTRY"
                    options={countrys}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextFieldComponet
                    formik={formik}
                    width="100%"
                    label="ENTERPRISE"
                    variant="standard"
                    name="enterprise"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextFieldComponet
                    formik={formik}
                    width="100%"
                    label="COMPANY WEBSITE"
                    variant="standard"
                    name="company_website"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <CheckBoxComponent
                    formik={formik}
                    name={"check_option"}
                    values={[
                      { id: 0, name: "Online" },
                      { id: 1, name: "Retail" },
                      { id: 2, name: "Wholesale" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextFieldComponet
                    formik={formik}
                    width="100%"
                    label="Leave us a message"
                    variant="standard"
                    name="message"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                sx={{ width: "100%" }}
                variant="outlined"
                onClick={formik.handleSubmit}
              >
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
