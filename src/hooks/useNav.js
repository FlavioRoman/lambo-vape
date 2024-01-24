// REACT / HOOKS
import { useEffect, useState } from "react";

// REACT ROUTER DOM
import { useLocation } from "react-router-dom";

export function useNav() {
  const location = useLocation();

  const [show, setShow] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [change, setChange] = useState(false);
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    if (location.pathname == "/menu") setMobile(true);
    if (location.pathname == "/authentication") setMobile(true);
    if (location.pathname == "/admin") setMobile(true);
    if (location.pathname == "/client") setMobile(true);
    if (location.pathname == "/contact") setMobile(true);
    if (location.pathname == "/distributor") setMobile(true);
    if (location.pathname == "/wholesale") setMobile(true);

    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 50) {
        setChange(true);
      } else {
        setChange(false);
      }

      setPrevOffset(offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [change, prevOffset]);

  return {
    show,
    setShow,
    change,
    setChange,
    mobile,
  };
}
