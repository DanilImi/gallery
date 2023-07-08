import ExportedImage from "next-image-export-optimizer"
import Slider from "react-slick"
import styles from "./slider.module.css"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { dataSetImage } from "@/utils/consts"

export const SliderForGooseart:FC<{ setChangeImg: Dispatch<SetStateAction<string>>; }> = ({setChangeImg}) => {
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
  const data:string[] = [
    dataSetImage.slGooseart1, 
    dataSetImage.slGooseart2, 
    dataSetImage.slGooseart3, 
    dataSetImage.slGooseart4, 
    dataSetImage.slGooseart5
  ]
  const settings = {
    autoplay: true,
    Infinity: true,
    speed: 500,
    slidesToShow: windowWidth <= 1400 ? (windowWidth <= 1200 ? (windowWidth <= 990 ? 2 : 2.5) : 3) : 3.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,
    arrows: false
  }
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {data.map((el:string, index) => (
          <div key={`${index}${el}`} onClick={() => setChangeImg(el)}>
            <ExportedImage width={384} height={352} src={el} alt="slide" />
          </div>
        ))}
      </Slider>
    </div>
  )
}