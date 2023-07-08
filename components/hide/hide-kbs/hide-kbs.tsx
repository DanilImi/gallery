import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react"
import styles from "./hide-kbs.module.css"
import { SliderMini } from "@/components/slider-mini"
import { dataSetImage } from "@/utils/consts"


export const HideKbs:FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const data = [
    dataSetImage.kbs3, 
    dataSetImage.kbs1, 
    dataSetImage.kbs2
  ]
  const description = (<div className={styles.description}>KBS is a hong kong company That provides accounting and audit services. The company needed a logo rebranding. We used the calculator as a basis and created a logo that reflects the essence of the company.</div>)
  const dataSizeWidthCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeHeightCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeWidth:number[] = [
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc
  ]
  const dataSizeHeight:number[] = [
    dataSizeHeightCalc, 
    dataSizeHeightCalc, 
    dataSizeHeightCalc
  ]
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
    <div className="container" style={{marginTop: "6px"}}>
      {windowWidth <= 480 ? 
        (<SliderMini 
          data={data} 
          width={dataSizeWidth} 
          height={dataSizeHeight}
          description={description}
          widthDots={"kbs"}
        />) : (
      <div className={styles.wrapper}>
        <div className={styles.previewGroup}>
          <div className={styles.preview}>
            <ExportedImage fill src={dataSetImage.kbs1} alt="preview" />
          </div>
          <div className={styles.description}>KBS is a hong kong company That provides accounting and audit services. The company needed a logo rebranding. We used the calculator as a basis and created a logo that reflects the essence of the company.</div>
        </div>
        <div className={styles.beforeAfter}>
          <div className={styles.before}>
            <ExportedImage fill src={dataSetImage.kbs2} alt="kbs1" />
          </div>
          <div className={styles.after}>
            <ExportedImage fill src={dataSetImage.kbs3} alt="kbs1" />
          </div>
        </div>
      </div>
        )}
    </div>
  )
}