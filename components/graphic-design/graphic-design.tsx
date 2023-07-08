import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import styles from "./graphic-design.module.css"
import { dataSetImage } from "@/utils/consts"

export const GraphicDesign:FC = () => {
  return (
    <div className={styles.graphicDesign}>
      <div className={styles.rabbitCat}>
        <p>We take great responsibility in creating a positive relationship between your brand and its audience</p>
        <div className={styles.rabbitCatImg}><ExportedImage fill src={dataSetImage.rabbitCat} alt="rabbit and cat" /></div>
      </div>
      <div className={styles.rabbit}>
        <div className={styles.rabbitImg}><ExportedImage fill src={dataSetImage.rabbit} alt="rabbit" /></div>
        <p>We understand both the client and the brand, and we create a golden mean that unites them</p>
      </div>
      <div className={styles.designInspire}>We create designs that inspire</div>
      <div className={styles.description}>Graphic design<br /> illustration<br /> Branding<br /> Graphic branding<br /> Corporate identity design<br /> Rebranding<br /> UI/UX strategy<br /> UX planning<br /> UI design<br /> Apps design<br /> websites design</div>
    </div>
  )
}