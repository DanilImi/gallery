import ExportedImage from "next-image-export-optimizer"
import styles from "./hide-aline.module.css"
import alineCold from "../../../public/images/alineCold.png"
import alineFont from "../../../public/images/alineFont.png"
import detail from "../../../public/images/alineGroup.png"
import { useEffect, useState } from "react"
import { SliderMini } from "@/components/slider-mini"

export const HideAline = () => {
  const data = [alineCold, alineFont, detail]
  const description = (<div className={styles.alineFontText}>
    Inspired by the sun, sea and shells, this design was created as the personification of the author. Elegance, saturation through the prism of minimalism, that's how we saw this project.
  </div>)
  const dataSizeWidth:number[] = [243, 380, 380, 380]
  const dataSizeHeight:number[] = [380, 226, 226, 226]
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
    <div className="container">
      {windowWidth <= 480 ? 
        (<SliderMini 
          data={data} 
          width={dataSizeWidth} 
          height={dataSizeHeight}
          description={description} 
        />) : (
      <div className={styles.wrapper}>
        <div className={styles.preview}>
          <div className={styles.alineCold}>
            <ExportedImage fill src={alineCold} alt="alineCold" />
          </div>
          <div className={styles.alineFont}>
            <div className={styles.alineFontText}>
              Inspired by the sun, sea and shells, this design was created as the personification of the author. Elegance, saturation through the prism of minimalism, that's how we saw this project.
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