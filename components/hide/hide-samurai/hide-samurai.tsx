import ExportedImage from "next-image-export-optimizer"
import styles from "./hide-samurai.module.css"
import samurai1 from "../../../public/images2/samurai1.webp"
import samurai2 from "../../../public/images2/samurai2.webp"
import samurai3 from "../../../public/images2/samurai3.webp"
import samurai4 from "../../../public/images2/samurai4.webp"
import samurai5 from "../../../public/images2/samurai5.webp"
import { StaticImageData } from "next/image"
import { FC, useEffect, useState } from "react"
import { SliderMini } from "components/slider-mini"

export const HideSamurai:FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSamurai, setIsSamurai] = useState(samurai5);
  const data: StaticImageData[] = [samurai1, samurai2, samurai3, samurai4, samurai5]
  const dataForSlider: StaticImageData[] = [samurai1, samurai2, samurai3, samurai4, samurai5]
  const dataSizeWidthCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeHeightCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeWidth:number[] = [dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc]
  const dataSizeHeight:number[] = [dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc]
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
    <div className="container">
      {windowWidth <= 480 ? 
        (<SliderMini 
          data={dataForSlider} 
          width={dataSizeWidth} 
          height={dataSizeHeight}
          description={description} 
        />) : (
      <div className={styles.wrapper}>
        <div className={styles.iconGroup}>
          {data.map((el:StaticImageData, index) => (
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