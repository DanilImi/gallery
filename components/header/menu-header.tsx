import ExportedImage from "next-image-export-optimizer"
import styles from "./header.module.css"
import rabbit from "../../public/images/rabbit.svg"
import rabbitBlack from "../../public/images/rabbitBlack.png"
import close from "../../public/images/close.svg"
import { useEffect, useState } from "react"

export const MenuHeader = () => {
  const [isActive, setIsActive] = useState(false)
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={styles.menu}>
      {isActive  && (
        <button className={styles.btnClose} onClick={() => setIsActive(!isActive)}><ExportedImage width={20} height={20} src={close} alt="rabbit" placeholder="blur" /></button>
      )}
      <div className={isActive ? styles.active : styles.menuContainer}>
        <button className={scroll > 870 ? styles.btnBlack : styles.btn}>work</button>
        <button className={scroll > 870 ? styles.btnBlack : styles.btn}>what we do</button>
        <button className={scroll > 870 ? styles.btnBlack : styles.btn}>contact</button>
      </div>
      <button className={styles.btnRabbit} onClick={() => setIsActive(!isActive)}><ExportedImage width={33} height={34.62} src={scroll > 870 ? rabbitBlack : rabbit} alt="rabbit" placeholder="blur" /></button>
    </nav>
  )
}