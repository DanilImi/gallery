import ExportedImage from "next-image-export-optimizer"
import styles from "./header.module.css"
import rabbit from "../../public/images/rabbit.svg"
import close from "../../public/images/close.svg"
import { useState } from "react"

export const MenuHeader = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className={styles.menu}>
      {isActive  && (
        <button className={styles.btnClose} onClick={() => setIsActive(!isActive)}><ExportedImage width={20} height={20} src={close} alt="rabbit" placeholder="blur" /></button>
      )}
      <div className={isActive ? styles.active : styles.menuContainer}>
        <button className={styles.btn}>work</button>
        <button className={styles.btn}>what we do</button>
        <button className={styles.btn}>contact</button>
      </div>
      <button className={styles.btnRabbit} onClick={() => setIsActive(!isActive)}><ExportedImage width={33} height={34.62} src={rabbit} alt="rabbit" placeholder="blur" /></button>
    </nav>
  )
}