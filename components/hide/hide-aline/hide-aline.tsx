import ExportedImage from "next-image-export-optimizer"
import styles from "./hide-aline.module.css"
import { useEffect, useState } from "react"
import { SliderMini } from "@/components/slider-mini"
import { dataSetImage } from "@/utils/consts"

export const HideAline = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const data = [
    dataSetImage.aline2, 
    dataSetImage.aline1, 
    dataSetImage.aline3
  ]
  const description = (<div className={styles.alineFontText}>
    Inspired by the sun, sea and shells, this design was created as the personification of the author. Elegance, saturation through the prism of minimalism, that&apos;s how we saw this project.
  </div>)
  const dataSizeWidth:number[] = [300, 300, 300]
  const dataSizeHeight:number[] = [300, 300, 300]
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
          widthDots={"aline-sl"}
        />) : (
      <div className={styles.wrapper}>
        <div className={styles.preview}>
          <div className={styles.alineCold}>
            <ExportedImage fill src={dataSetImage.alineCold} alt="alineCold" />
          </div>
          <div className={styles.alineFont}>
            <div className={styles.alineFontText}>
              Inspired by the sun, sea and shells, this design was created as the personification of the author. Elegance, saturation through the prism of minimalism, that&apos;s how we saw this project.
            </div>
            <div className={styles.alineFontImg}>
              <ExportedImage fill src={dataSetImage.alineFont} alt="alineFontImg" />
            </div>
          </div>
        </div>
        <div className={styles.detail}>
          <ExportedImage fill src={dataSetImage.detail} alt="detail" />
        </div>
      </div>
      )}
    </div>
  )
}