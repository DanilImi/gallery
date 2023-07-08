import ExportedImage from "next-image-export-optimizer"
import styles from "./hide-samurai.module.css"
import { FC, useEffect, useState } from "react"
import { SliderMini } from "components/slider-mini"
import { dataSetImage } from "@/utils/consts"

export const HideSamurai:FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSamurai, setIsSamurai] = useState(dataSetImage.samurai5);
  const data: string[] = [
    dataSetImage.samurai1, 
    dataSetImage.samurai2, 
    dataSetImage.samurai3, 
    dataSetImage.samurai4, 
    dataSetImage.samurai5,
  ]
  const dataForSlider: string[] = [
    dataSetImage.samurai1, 
    dataSetImage.samurai2, 
    dataSetImage.samurai3, 
    dataSetImage.samurai4, 
    dataSetImage.samurai5,
  ]
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
  const description = (
    <div className={styles.description}>&quot;Almost Samurai&quot; is a collection of characters that combine traditional Japanese culture, filtered through modern sophistication.</div>
  )
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
          data={dataForSlider} 
          width={dataSizeWidth} 
          height={dataSizeHeight}
          description={description}
          widthDots={"samurai-sl"}
        />) : (
      <div className={styles.wrapper}>
        <div className={styles.iconGroup}>
          {data.map((el:string, index) => (
            <div key={`${index}${el}`} className={styles.icon} onClick={() => setIsSamurai(el)}>
              <ExportedImage height={230} width={230} src={el} alt="icon" />
            </div>
          ))}
        </div> 
        <div className={styles.previewGroup}>
          <div className={styles.description}>&quot;Almost Samurai&quot; is a collection of characters that combine traditional Japanese culture, filtered through modern sophistication.</div>
          <div className={styles.preview}>
            <ExportedImage fill src={isSamurai} alt="icon" />
          </div>
        </div>
      </div>
      )}
    </div>
  )
}