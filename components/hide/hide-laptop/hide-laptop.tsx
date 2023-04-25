import { SliderContainer } from "components/slider"
import { SliderMini } from "components/slider-mini";
import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react";
import styles from "./hide-laptop.module.css"
import slide1 from "../../../public/images2/1281.webp"
import slide2 from "../../../public/images2/1282.webp"
import slide3 from "../../../public/images2/1283.webp"
import slide4 from "../../../public/images2/1284.webp"
import slide5 from "../../../public/images2/1285.webp"
import slide6 from "../../../public/images2/1286.webp"
import slide7 from "../../../public/images2/1287.webp"
import slide8 from "../../../public/images2/1288.webp"
import slide9 from "../../../public/images2/1289.webp"
import { StaticImageData } from "next/image";

export const HideLaptop:FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [changeImg, setChangeImg] = useState<StaticImageData | string>(slide1);
  const description = (
    <div className={styles.wrapperText}>
      <div className={styles.desc1}>The task was to create a design that would stand out among other crypto wallets. We have created an ergonomic, adapted and visually balanced design.</div>
      <div className={styles.desc2}>Over 60 screens created<br />Light and dark MODES support<br />Improved UX<br />Created a unique style that differs from similar apps<br />Increased engagement in the app after the design change</div>
    </div>
  )
  const data:StaticImageData[] = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9]
  const dataSizeWidthCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeHeightCalc = windowWidth <= 388 ? 177 : 226
  const dataSizeWidth:number[] = [dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc]
  const dataSizeHeight:number[] = [dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc]
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
        {windowWidth <= 800 ? <SliderMini 
          data={data} 
          width={dataSizeWidth} 
          height={dataSizeHeight} 
          description={description} 
          widthDots={"laptop-sl"}
          /> : (
          <>
            <SliderContainer setChangeImg={setChangeImg} />
            <div className={`${styles.description} ${styles.wrapper} container`}>
              <div className={styles.wrapperText}>
                <div className={styles.desc1}>The task was to create a design that would stand out among other crypto wallets. We have created an ergonomic, adapted and visually balanced design.</div>
                <div className={styles.desc2}>Over 60 screens created<br />Light and dark MODES support<br />Improved UX<br />Created a unique style that differs from similar apps<br />Increased engagement in the app after the design change</div>
              </div>
              <div className={styles.wrapperImg}>
                <ExportedImage fill src={changeImg} alt="descriptionLaptop" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}