import ExportedImage from "next-image-export-optimizer"
import Slider from "react-slick"
import styles from "./slider.module.css"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { dataSetImage } from "@/utils/consts"

export const SliderForGirl:FC<{ setChangeImg: Dispatch<SetStateAction<string>>; }> = ({setChangeImg}) => {
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
  const settings = {
    autoplay: true,
    Infinity: true,
    speed: 500,
    slidesToShow: windowWidth <= 1400 ? (windowWidth <= 1200 ? (windowWidth <= 990 ? 3 : 4) : 4) : 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,
    arrows: false
  }
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {data.map((el:string, index) => (
          <div className={styles.slideImg} key={`${index}${el}`} onClick={() => setChangeImg(el)}>
            <ExportedImage width={231} height={277} src={el} alt="slide" />
          </div>
        ))}
      </Slider>
    </div>
  )
}