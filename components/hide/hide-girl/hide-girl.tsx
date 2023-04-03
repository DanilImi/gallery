import { SliderForGirl } from "components/slider"
import { SliderMini } from "components/slider-mini";
import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react";
import styles from "./hide-girl.module.css"
import girl1 from "../../../public/images2/girl1.webp"
import girl2 from "../../../public/images2/girl2.webp"
import girl3 from "../../../public/images2/girl3.webp"
import girl4 from "../../../public/images2/girl4.webp"
import girl5 from "../../../public/images2/girl5.webp"
import girl6 from "../../../public/images2/girl6.webp"
import girl7 from "../../../public/images2/girl7.webp"
import girl8 from "../../../public/images2/girl8.webp"
import girl9 from "../../../public/images2/girl9.webp"
import girl10 from "../../../public/images2/girl10.webp"
import girl11 from "../../../public/images2/girl11.webp"
import girl12 from "../../../public/images2/girl12.webp"
import girl13 from "../../../public/images2/girl13.webp"
import { StaticImageData } from "next/image";


export const HideGirl:FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const description = (
    <div className={styles.desc1}>Lovely and delicate illustrations that we created for merchandise that reminds dark-skinned girls how beautiful they are.</div>
  )
  const data:StaticImageData[] = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10, girl11, girl12, girl13]
  const dataSizeWidthCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeHeightCalc = windowWidth <= 388 ? 356 : 451
  const dataSizeWidth:number[] = [dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc]
  const dataSizeHeight:number[] = [dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc]
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
    <>
      <div className={styles.wrapperHideLaptop}>
        {windowWidth <= 800 ? <SliderMini data={data} width={dataSizeWidth} height={dataSizeHeight} description={description} /> : (
          <>
            <SliderForGirl />
            <div className={`${styles.description} ${styles.wrapper} container`}>
              <div className={styles.wrapperImg}>
                <ExportedImage fill src={girl1} alt="sliderPreview" />
              </div>
              <div className={styles.desc1}>Lovely and delicate illustrations that we created for merchandise that reminds dark-skinned girls how beautiful they are.</div>
            </div>
          </>
        )}
      </div>
    </>
  )
}