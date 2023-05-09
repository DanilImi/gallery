import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import styles from "./future.module.css"
import future from "../../public/images/future.png"

export const Future:FC = () => {
  return (
    <div className={styles.future}>
      <div className={styles.futureFon}>
        <ExportedImage fill src={future} alt="future" />
      </div>
      <div className={styles.futureText}>We rethink the existing and create something new</div>
    </div>
  )
}