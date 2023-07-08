import ExportedImage from "next-image-export-optimizer"
import Slider from "react-slick"
import styles from "./slider.module.css"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { dataSetImage } from "@/utils/consts"

export const SliderContainer:FC<{ setChangeImg: Dispatch<SetStateAction<string>>; }> = ({setChangeImg}) => {
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
  const data = [
    dataSetImage.laptop1, 
    dataSetImage.laptop2, 
    dataSetImage.laptop3, 
    dataSetImage.laptop4, 
    dataSetImage.laptop5, 
    dataSetImage.laptop6, 
    dataSetImage.laptop7, 
    dataSetImage.laptop8, 
    dataSetImage.laptop9, 
    dataSetImage.laptop10
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
          <div className={styles.slideImg} key={`${index}${el}`} onClick={() => setChangeImg(el)}>
            <ExportedImage width={380} height={226} src={el} alt="slide" />
          </div>
        ))}
      </Slider>
    </div>
  )
}