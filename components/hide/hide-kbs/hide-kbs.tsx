import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react"
import styles from "./hide-kbs.module.css"
import preview from "../../../public/images/kbsPreview.png"
import kbs1 from "../../../public/images/kbs1.png"
import kbs2 from "../../../public/images/kbs2.png"
import { SliderMini } from "@/components/slider-mini"


export const HideKbs:FC = () => {
  const data = [preview, kbs1, kbs2]
  const description = (<div className={styles.description}>KBS is a hong kong company That provides accounting and audit services. The company needed a logo rebranding. We used the calculator as a basis and created a logo that reflects the essence of the company.</div>)
  const dataSizeWidth:number[] = [380, 380, 380]
  const dataSizeHeight:number[] = [451, 259, 259]
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  return (
    <div className="container">
      {windowWidth <= 480 ? 
        (<SliderMini 
          data={data} 
          width={dataSizeWidth} 
          height={dataSizeHeight}
          description={description} 
        />) : (
      <div className={styles.wrapper}>
        <div className={styles.previewGroup}>
          <div className={styles.preview}>
            <ExportedImage fill src={preview} alt="preview" />
          </div>
          <div className={styles.description}>KBS is a hong kong company That provides accounting and audit services. The company needed a logo rebranding. We used the calculator as a basis and created a logo that reflects the essence of the company.</div>
        </div>
        <div className={styles.beforeAfter}>
          <div className={styles.before}>
            <ExportedImage fill src={kbs1} alt="kbs1" />
          </div>
          <div className={styles.after}>
            <ExportedImage fill src={kbs2} alt="kbs1" />
          </div>
        </div>
      </div>
        )}
    </div>
  )
}