import ExportedImage from "next-image-export-optimizer"
import Slider from "react-slick"
import styles from "./slider.module.css"
import slide1 from "../../public/images/slide1.svg"
import slide2 from "../../public/images/slide2.svg"
import slide3 from "../../public/images/slide3.svg"
import slide4 from "../../public/images/slide4.svg"
import slide5 from "../../public/images/slide5.svg"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { StaticImageData } from "next/image"

export const SliderContainer:FC<{ setChangeImg: Dispatch<SetStateAction<StaticImageData | string>>; }> = ({setChangeImg}) => {
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
  const data = [slide1, slide2, slide3, slide4, slide5]
  const settings = {
    autoplay: true,
    Infinity: true,
    speed: 500,
    slidesToShow: windowWidth <= 1400 ? (windowWidth <= 1200 ? (windowWidth <= 990 ? 2 : 2.5) : 3) : 3.5,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false
  }
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {data.map((el:StaticImageData, index) => (
          <div className={styles.slideImg} key={`${index}${el}`} onClick={() => setChangeImg(el)}>
            <ExportedImage width={380} height={226} src={el} alt="slide" />
          </div>
        ))}
      </Slider>
    </div>
  )
}