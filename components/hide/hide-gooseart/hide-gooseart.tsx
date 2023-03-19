import { SliderForGooseart } from "components/slider"
import { SliderMini } from "components/slider-mini";
import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react";
import styles from "./hide-gooseart.module.css"
import slGooseart1 from "../../../public/images/gooseart1.svg"
import slGooseart2 from "../../../public/images/gooseart2.svg"
import slGooseart3 from "../../../public/images/gooseart3.svg"
import slGooseart4 from "../../../public/images/gooseart4.svg"
import slGooseart5 from "../../../public/images/gooseart5.png"
import { StaticImageData } from "next/image";


export const HideGooseart:FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [changeImg, setChangeImg] = useState<StaticImageData | string>(slGooseart5);
  const description = (
    <div className={styles.wrapperText}>
      <div className={styles.desc1}>GooseArt is a unique app that combines a coloring book and drawing lessons</div>
      <div className={styles.desc2}>The idea of the application is based on helping to deal with stress, developing creative skills and just passing the leisure time of a modern person, by coloring illustrations and learning to draw.</div>
    </div>
  )
  const data:StaticImageData[] = [slGooseart4, slGooseart1, slGooseart2, slGooseart3]
  const dataSizeWidthCalc = windowWidth <= 388 ? 300 : 384
  const dataSizeHeightCalc = windowWidth <= 388 ? 300 : 352
  const dataSizeWidth:number[] = [dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc]
  const dataSizeHeight:number[] = [dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc, dataSizeHeightCalc]
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
            <SliderForGooseart setChangeImg={setChangeImg} />
            <div className={`${styles.description} ${styles.wrapper} container`}>
              <div className={styles.wrapperText}>
                <div className={styles.desc1}>GooseArt is a unique app that combines a coloring book and drawing lessons</div>
                <div className={styles.desc2}>The idea of the application is based on helping to deal with stress, developing creative skills and just passing the leisure time of a modern person, by coloring illustrations and learning to draw.</div>
              </div>
              <div className={styles.wrapperImg}>
                <ExportedImage fill src={changeImg} alt="sliderPreview" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}