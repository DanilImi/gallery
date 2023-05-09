
import { useEffect, useState } from "react";
import styles from "./header.module.css"
import { MenuHeader } from "./menu-header"

export const Header = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={styles.sticky}>
      <div className={scroll > 870 ? styles.logoBlack : styles.logo}>Codependencyonart</div>
      <MenuHeader />
    </header>
  )
}
