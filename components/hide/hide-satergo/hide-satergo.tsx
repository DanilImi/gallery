import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react"
import styles from "./hide-satergo.module.css"
import satergoPreview from "../../../public/images/satergoPreview.png"
import satergoIcon from "../../../public/images/satergoIcon.svg"
import tShort from "../../../public/images/tSort.svg"
import branding from "../../../public/images/branding.png"
import { SliderMini } from "components/slider-mini"


export const HideSatergo:FC = () => {
  const data = [satergoPreview, satergoIcon, branding, tShort]
  const description = (<div className={styles.description}>When creating the Satergo logo, the main goal was to adhere to the image of the planet Saturn</div>)
  const dataSizeWidth:number[] = [353, 353, 380, 380]
  const dataSizeHeight:number[] = [316, 316, 226, 226]
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
          <div className={styles.upBlock}>
            <div className={styles.satergoPreview}>
              <ExportedImage fill src={satergoPreview} alt="satergoPreview" />
            </div>
            <div className={styles.satergoIcon}>
              <div className={styles.description}>When creating the Satergo logo, the main goal was to adhere to the image of the planet Saturn</div>
              <div className={styles.icon}>
                <ExportedImage fill src={satergoIcon} alt="satergoIcon" />
              </div>
            </div>
          </div>
          <div className={styles.downBlock}>
            <div className={styles.branding}>
              <ExportedImage fill src={branding} alt="branding" />
            </div>
            <div className={styles.tShort}>
              <ExportedImage fill src={tShort} alt="tShort" />
            </div>
          </div>
        </div>
        )}
    </div>
  )
}