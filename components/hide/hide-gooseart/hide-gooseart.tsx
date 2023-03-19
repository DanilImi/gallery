import { SliderForGooseart } from "components/slider"
import { SliderMini } from "components/slider-mini";
import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react";
import styles from "./hide-gooseart.module.css"
import slGooseart1 from "../../../public/images/slideGooseart1.png"
import slGooseart2 from "../../../public/images/slideGooseart2.png"
import slGooseart3 from "../../../public/images/slideGooseart3.png"
import slGooseartPreview from "../../../public/images/slideGooseartPreview.png"
import { StaticImageData } from "next/image";


export const HideGooseart:FC = () => {
  const description = (
    <div className={styles.wrapperText}>
      <div className={styles.desc1}>GooseArt is a unique app that combines a coloring book and drawing lessons</div>
      <div className={styles.desc2}>The idea of the application is based on helping to deal with stress, developing creative skills and just passing the leisure time of a modern person, by coloring illustrations and learning to draw.</div>
    </div>
  )
  const data:StaticImageData[] = [slGooseartPreview , slGooseart1, slGooseart2, slGooseart3]
  const dataSizeWidth:number[] = [380, 380, 380, 380]
  const dataSizeHeight:number[] = [391, 391, 391, 391]
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
            <SliderForGooseart />
            <div className={`${styles.description} ${styles.wrapper} container`}>
              <div className={styles.wrapperText}>
                <div className={styles.desc1}>GooseArt is a unique app that combines a coloring book and drawing lessons</div>
                <div className={styles.desc2}>The idea of the application is based on helping to deal with stress, developing creative skills and just passing the leisure time of a modern person, by coloring illustrations and learning to draw.</div>
              </div>
              <div className={styles.wrapperImg}>
                <ExportedImage fill src={slGooseartPreview} alt="sliderPreview" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}