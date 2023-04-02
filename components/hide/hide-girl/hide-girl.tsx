import { SliderForGirl } from "components/slider"
import { SliderMini } from "components/slider-mini";
import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react";
import styles from "./hide-girl.module.css"
import girl1 from "../../../public/images/girl1.png"
import girl2 from "../../../public/images/girl2.png"
import girl3 from "../../../public/images/girl3.png"
import girl4 from "../../../public/images/girl4.png"
import girl5 from "../../../public/images/girl5.png"
import girlPreview from "../../../public/images/previewGirl.png"
import { StaticImageData } from "next/image";


export const HideGirl:FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const description = (
    <div className={styles.desc1}>Lovely and delicate illustrations that we created for merchandise that reminds dark-skinned girls how beautiful they are.</div>
  )
  const data:StaticImageData[] = [girlPreview, girl1, girl2, girl3, girl4, girl5]
  const dataSizeWidthCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeHeightCalc = windowWidth <= 388 ? 356 : 451
  const dataSizeWidth:number[] = [dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc]
  const dataSizeHeight:number[] = [dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc]
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
                <ExportedImage fill src={girlPreview} alt="sliderPreview" />
              </div>
              <div className={styles.desc1}>Lovely and delicate illustrations that we created for merchandise that reminds dark-skinned girls how beautiful they are.</div>
            </div>
          </>
        )}
      </div>
    </>
  )
}