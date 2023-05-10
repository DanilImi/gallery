import { FC } from "react"
import styles from "./preview-viewer.module.css"

export const PreviewViewer:FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperImage}>
        <div>We create designs that inspire</div>
      </div>
    </div>
  )
}