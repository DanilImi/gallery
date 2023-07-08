import ExportedImage from "next-image-export-optimizer"
import { FC, useEffect, useState } from "react"
import styles from "./hide-emporas.module.css"
import { SliderMini } from "components/slider-mini"
import { dataSetImage } from "@/utils/consts"


export const HideEmporas:FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const data: string[] = [
    dataSetImage.emporas1,
    dataSetImage.emporas2,
    dataSetImage.emporas3
  ]
  const dataForSlider: string[] = [
    dataSetImage.hideEmporas, 
    dataSetImage.emporas1, 
    dataSetImage.emporas2, 
    dataSetImage.emporas3
  ]
  const description = (
    <div className={styles.descriptionGroup}>
      <div className={styles.description1}>The idea of Emporas is to create unique merch in cooperation with crypto projects. This is the case when Web 3.0 becomes part of the physical world.</div>
      <div className={styles.description1}>In Emporas branding, we created a style that is very different from the usual design of the crypto industry. No “falling number binary effects”, cyber sculptures or neural networks, just real design.</div>
    </div>
  )
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
          widthDots={"emporas-sl"}
        />) : (
      <div className={styles.wrapper}>
        <div className={styles.previewGroup}>
          <div className={styles.previewImg}>
            <ExportedImage fill src={dataSetImage.hideEmporas} alt="hideEmporas" />
          </div>
          <div className={styles.descriptionGroup}>
            <div className={styles.description1}>The idea of Emporas is to create unique merch in cooperation with crypto projects. This is the case when Web 3.0 becomes part of the physical world.</div>
            <div className={styles.description1}>In Emporas branding, we created a style that is very different from the usual design of the crypto industry. No “falling number binary effects”, cyber sculptures or neural networks, just real design.</div>
          </div>
        </div>
        <div className={styles.info}>
          {data.map((el:string, index) => (
            <div key={`${index}${el}`} className={styles.icon}>
              <ExportedImage fill src={el} alt="info" />
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  )
}