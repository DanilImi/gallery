import ExportedImage from "next-image-export-optimizer"
import styles from "./hide-ergonodes.module.css"
import ergonodesIcon from "../../../public/images2/ergonodesdesc.webp"
import ergonodesPreview from "../../../public/images2/ergonodespreview.webp"
import { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import { SliderMini } from "components/slider-mini"

export const HideErgonodes = () => {
  const description = (
    <div className={styles.description}>Ergonodes determines the size of the Ergo network by finding all nodes participating in it. We created a design reminiscent of connected threads, like infinity.</div>
  )
  const data:StaticImageData[] = [ergonodesIcon, ergonodesPreview]
  const dataSizeWidth:number[] = [380, 380]
  const dataSizeHeight:number[] = [380, 380]
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
    <div className="container" style={{marginTop: "6px"}}>
      {windowWidth <= 480 ? 
        (<SliderMini 
          data={data} 
          width={dataSizeWidth} 
          height={dataSizeHeight}
          description={description}
          widthDots={"ergonodes-sl"}
        />) : (
        <div className={styles.wrapper}>
          <div className={styles.ergonodesDesc}>
            <div className={styles.description}>Ergonodes determines the size of the Ergo network by finding all nodes participating in it. We created a design reminiscent of connected threads, like infinity.</div>
            <div className={styles.icon}>
              <ExportedImage fill src={ergonodesIcon} alt="ergonodesIcon" />
            </div>
          </div>
          <div className={styles.ergonodesPreview}>
            <ExportedImage fill src={ergonodesPreview} alt="ergonodesPreview" />
          </div>
        </div>
      )}
    </div>
  )
}