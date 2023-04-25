import ExportedImage from "next-image-export-optimizer"
import styles from "./hide-aline.module.css"
import alineCold from "../../../public/images2/alineCold.webp"
import alineFont from "../../../public/images2/alineFont.webp"
import detail from "../../../public/images2/alineGroup.webp"
import aline1 from "../../../public/images2/aline1.webp"
import aline2 from "../../../public/images2/aline2.webp"
import aline3 from "../../../public/images2/aline3.webp"
import { useEffect, useState } from "react"
import { SliderMini } from "@/components/slider-mini"

export const HideAline = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const data = [aline2, aline1, aline3]
  const description = (<div className={styles.alineFontText}>
    Inspired by the sun, sea and shells, this design was created as the personification of the author. Elegance, saturation through the prism of minimalism, that&apos;s how we saw this project.
  </div>)
  // const dataSizeWidthCalc = windowWidth <= 388 ? 300 : 380
  // const dataSizeWidth:number[] = [windowWidth <= 388 ? 192 : 243, dataSizeWidthCalc, dataSizeWidthCalc, dataSizeWidthCalc]
  // const dataSizeHeight:number[] = [windowWidth <= 388 ? 300 : 380, 226, 226]
  const dataSizeWidth:number[] = [300, 300, 300]
  const dataSizeHeight:number[] = [300, 300, 300]
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
          data={data} 
          width={dataSizeWidth} 
          height={dataSizeHeight}
          description={description}
          widthDots={"aline-sl"}
        />) : (
      <div className={styles.wrapper}>
        <div className={styles.preview}>
          <div className={styles.alineCold}>
            <ExportedImage fill src={alineCold} alt="alineCold" />
          </div>
          <div className={styles.alineFont}>
            <div className={styles.alineFontText}>
              Inspired by the sun, sea and shells, this design was created as the personification of the author. Elegance, saturation through the prism of minimalism, that&apos;s how we saw this project.
            </div>
            <div className={styles.alineFontImg}>
              <ExportedImage fill src={alineFont} alt="alineFontImg" />
            </div>
          </div>
        </div>
        <div className={styles.detail}>
          <ExportedImage fill src={detail} alt="detail" />
        </div>
      </div>
      )}
    </div>
  )
}