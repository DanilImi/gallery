
import { FC, useEffect, useState } from "react";
import styles from "./header.module.css"
import { MenuHeader } from "./menu-header"

interface scrollHeader {
  handleClickGirl: () => void,
  handleClickGraphic: () => void,
  handleClickContact: () => void,
}

export const Header:FC<scrollHeader> = ({handleClickGirl, handleClickContact, handleClickGraphic}) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const handleScrollTop = () => {
    window.scrollTo({top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={styles.sticky}>
      <div onClick={handleScrollTop} className={scroll > 870 ? styles.logoBlack : styles.logo}>Codependencyonart</div>
      <MenuHeader 
        handleClickGirl={handleClickGirl} 
        handleClickGraphic={handleClickGraphic}
        handleClickContact={handleClickContact}
      />
    </header>
  )
}
