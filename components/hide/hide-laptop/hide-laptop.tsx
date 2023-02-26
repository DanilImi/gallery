import { SliderContainer } from "components/slider"
import { SliderMini } from "components/slider-mini";
import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react";
import styles from "./hide-laptop.module.css"
import slide1 from "../../../public/images/6.svg"
import slide2 from "../../../public/images/7.svg"
import slide3 from "../../../public/images/8.svg"
import slide4 from "../../../public/images/9.svg"
import slide5 from "../../../public/images/descLaptop.png"

export const HideLaptop:FC = () => {
  const description = (
    <div className={styles.wrapperText}>
      <div className={styles.desc1}>The task was to create a design that would stand out among other crypto wallets. We have created an ergonomic, adapted and visually balanced design.</div>
      <div className={styles.desc2}>Over 60 screens created<br />Light and dark MODES support<br />Improved UX<br />Created a unique style that differs from similar apps<br />Increased engagement in the app after the design change</div>
    </div>
  )
  const data:string[] = [slide1, slide2, slide3, slide4, slide5]
  const dataSizeWidth:number[] = [380, 380, 380, 380, 380]
  const dataSizeHeight:number[] = [226, 226, 226, 226, 226]
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
    <>
      <div className={styles.wrapperHideLaptop}>
        {windowWidth <= 800 ? <SliderMini data={data} width={dataSizeWidth} height={dataSizeHeight} description={description} /> : (
          <>
            <SliderContainer />
            <div className={`${styles.description} ${styles.wrapper} container`}>
              <div className={styles.wrapperText}>
                <div className={styles.desc1}>The task was to create a design that would stand out among other crypto wallets. We have created an ergonomic, adapted and visually balanced design.</div>
                <div className={styles.desc2}>Over 60 screens created<br />Light and dark MODES support<br />Improved UX<br />Created a unique style that differs from similar apps<br />Increased engagement in the app after the design change</div>
              </div>
              <div className={styles.wrapperImg}>
                <ExportedImage fill src={slide5} alt="descriptionLaptop" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}