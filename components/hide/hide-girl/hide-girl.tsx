import { SliderForGirl } from "components/slider"
import { SliderMini } from "components/slider-mini";
import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react";
import styles from "./hide-girl.module.css"
import { StaticImageData } from "next/image";
import { dataSetImage } from "@/utils/consts";


export const HideGirl:FC = () => {
  const [changeImg, setChangeImg] = useState<string>(dataSetImage.girl3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const description = (
    <div className={styles.desc1}>Lovely and delicate illustrations that we created for merchandise that reminds dark-skinned girls how beautiful they are.</div>
  )
  const data:string[] = [
    dataSetImage.girl3, 
    dataSetImage.girl13, 
    dataSetImage.girl4, 
    dataSetImage.girl11, 
    dataSetImage.girl5, 
    dataSetImage.girl8, 
    dataSetImage.girl6, 
    dataSetImage.girl12, 
    dataSetImage.girl7, 
    dataSetImage.girl10, 
    dataSetImage.girl1, 
    dataSetImage.girl9, 
    dataSetImage.girl2
  ]
  const dataSizeWidthCalc = windowWidth <= 388 ? 300 : 380
  const dataSizeHeightCalc = windowWidth <= 388 ? 356 : 451
  const dataSizeWidth:number[] = [
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc, 
    dataSizeWidthCalc
  ]
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
      <div className={styles.wrapperHideLaptop} style={{marginTop: "6px"}}>
        {windowWidth <= 800 ? <SliderMini 
          data={data} 
          width={dataSizeWidth} 
          height={dataSizeHeight} 
          description={description} 
          widthDots={"girl"}
          /> : (
          <>
            <SliderForGirl setChangeImg={setChangeImg} />
            <div className={`${styles.description} ${styles.wrapper} container`}>
              <div className={styles.wrapperImg}>
                <ExportedImage fill src={changeImg} alt="sliderPreview" />
              </div>
              <div className={styles.desc1}>Lovely and delicate illustrations that we created for merchandise that reminds dark-skinned girls how beautiful they are.</div>
            </div>
          </>
        )}
      </div>
    </>
  )
}