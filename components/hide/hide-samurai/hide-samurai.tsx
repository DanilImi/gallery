import ExportedImage from "next-image-export-optimizer"
import styles from "./hide-samurai.module.css"
import samurai1 from "../../../public/images/samurai1.png"
import samurai2 from "../../../public/images/samurai2.png"
import samurai3 from "../../../public/images/samurai3.png"
import samurai4 from "../../../public/images/samurai4.png"
import samurai5 from "../../../public/images/samurai5.png"
import { StaticImageData } from "next/image"
import { FC, useEffect, useState } from "react"
import { SliderMini } from "components/slider-mini"

export const HideSamurai:FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const data: StaticImageData[] = [samurai1, samurai2, samurai3, samurai4]
  const dataForSlider: StaticImageData[] = [samurai1, samurai2, samurai3, samurai4, samurai5]
  const dataSizeWidthCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeHeightCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeWidth:number[] = [dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc]
  const dataSizeHeight:number[] = [dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc]
  const description = (
    <div className={styles.description}>"Almost Samurai" is a collection of characters that combine traditional Japanese culture, filtered through modern sophistication.</div>
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
            <div key={`${index}${el}`} className={styles.icon}>
              <ExportedImage height={230} width={230} src={el} alt="icon" />
            </div>
          ))}
        </div> 
        <div className={styles.previewGroup}>
          <div className={styles.description}>"Almost Samurai" is a collection of characters that combine traditional Japanese culture, filtered through modern sophistication.</div>
          <div className={styles.preview}>
            <ExportedImage fill src={samurai5} alt="icon" />
          </div>
        </div>
      </div>
      )}
    </div>
  )
}