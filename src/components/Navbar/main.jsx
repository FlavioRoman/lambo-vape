// STYLE
import styles from "./main.module.css";

// LOGO
import logo from "../../../public/logo.webp";

// ICON
import { FaBars } from "react-icons/fa";
import { IoMdApps } from "react-icons/io";

// CUSTOM HOOK
import { useNav } from "../../hooks/useNav";

// REACT / HOOKS
import { useEffect, useState } from "react";

// CONSTANT VALUES
import { NAV_OPTIONS } from "../../constant/main";

// REACT ROUTER DOM
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { show, setShow, mobile } = useNav();
  const [pathname, setPathname] = useState();
  const [submenuHover, setSubmenuHover] = useState("");

  const handleSubmenuHover = (text) => {
    setSubmenuHover(text);
  };

  useEffect(() => {
    setPathname(location.pathname);
  }, []);

  return (
    <nav
      className={`${styles.container_nav}`}
      style={{
        transition: "all 0.2 ease",
        backgroundColor: `${
          pathname === "/menu" ||
          pathname === "/authentication" ||
          pathname === "/distributor" ||
          pathname === "/contact" ||
          pathname === "/wholesale" ||
          pathname === "/admin" ||
          pathname === "/client"
            ? "#000"
            : "#00000050"
        }`,
      }}
    >
      {/* LOGO */}
      <a className={styles.container_logo} onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className={styles.logo} draggable="false" />
      </a>

      {/* OPTIONS */}
      <ul
        className={styles.nav_lists}
        style={{
          top: `${show ? "0%" : "-200%"}`,
          transition: "all 1s ease",
        }}
      >
        {NAV_OPTIONS.map((value) => (
          <a
            key={value?.id}
            href={value?.href}
            style={{
              display: `${mobile ? "none" : "block"}`,
            }}
            onClick={() => setShow(false)}
            className={styles.nav_list}
            onMouseEnter={() => handleSubmenuHover(value.text)}
            onMouseLeave={() => handleSubmenuHover("")}
          >
            {value?.text}
            {/* SUBMENU */}
            {value.submenu && value.submenu.length > 0 && (
              <ul
                className={styles.container_submenu}
                style={{
                  opacity: `${submenuHover === value.text ? "1" : "0"}`,
                }}
              >
                {value.submenu.map((item, index) => {
                  return (
                    <li key={index} className={styles.submenu}>
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            )}
          </a>
        ))}

        <a
          style={{
            display: `${mobile ? "none" : "block"}`,
          }}
          onClick={() => navigate("/distributor")}
          className={styles.nav_list}
        >
          DISTRIBUTORS
        </a>
        <a
          style={{
            display: `${mobile ? "none" : "block"}`,
          }}
          onClick={() => navigate("/wholesale")}
          className={styles.nav_list}
        >
          WHOLESALE
        </a>
        <a
          style={{
            display: `${mobile ? "none" : "block"}`,
          }}
          onClick={() => navigate("/contact")}
          className={styles.nav_list}
        >
          CONTACT US
        </a>

        {/* AUTHENTICATION */}
        <div className={styles.options}>
          {mobile && (
            <Link className={styles.authentication} to={"/"}>
              Home
            </Link>
          )}
          <Link className={styles.authentication} to={"/authentication"}>
            Authentication
          </Link>
          <Link to={"/menu"}>
            <IoMdApps className={styles.menu} />
          </Link>
        </div>
      </ul>

      {/* RESPONSIVE OPTIONS */}
      <div className={styles.nav_option}>
        <img src={"../../../public/img01.webp"} alt="" />
        <FaBars
          size={28}
          color={show ? "#fff" : "#fff"}
          onClick={() => setShow(!show)}
        />
      </div>
    </nav>
  );
}
