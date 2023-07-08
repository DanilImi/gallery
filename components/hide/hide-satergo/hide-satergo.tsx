import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react"
import styles from "./hide-satergo.module.css"
import { SliderMini } from "components/slider-mini"
import { dataSetImage } from "@/utils/consts"


export const HideSatergo:FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dataSizeWidthCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeHeightCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeWidth:number[] = [
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc
  ]
  const dataSizeHeight:number[] = [
    dataSizeHeightCalc, 
    dataSizeHeightCalc, 
    dataSizeHeightCalc, 
    dataSizeHeightCalc, 
    dataSizeHeightCalc
  ]
  const data = [
    dataSetImage.satergoPreview, 
    dataSetImage.satergoIcon, 
    dataSetImage.branding, 
    dataSetImage.tShort
  ]
  const description = (<div className={styles.description}>When creating the Satergo logo, the main goal was to adhere to the image of the planet Saturn</div>)
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
          widthDots={"satergo-sl"}
        />) : (
        <div className={styles.wrapper}>
          <div className={styles.upBlock}>
            <div className={styles.satergoPreview}>
              <ExportedImage fill src={dataSetImage.satergoPreview} alt="satergoPreview" />
            </div>
            <div className={styles.satergoIcon}>
              <div className={styles.description}>When creating the Satergo logo, the main goal was to adhere to the image of the planet Saturn</div>
              <div className={styles.icon}>
                <ExportedImage fill src={dataSetImage.satergoIcon} alt="satergoIcon" />
              </div>
            </div>
          </div>
          <div className={styles.downBlock}>
            <div className={styles.branding}>
              <ExportedImage fill src={dataSetImage.branding} alt="branding" />
            </div>
            <div className={styles.tShort}>
              <ExportedImage fill src={dataSetImage.tShort} alt="tShort" />
            </div>
          </div>
        </div>
        )}
    </div>
  )
}