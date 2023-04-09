import ExportedImage from "next-image-export-optimizer"
import Slider from "react-slick"
import styles from "./slider.module.css"
import slide1 from "../../public/images2/1281.webp"
import slide2 from "../../public/images2/1282.webp"
import slide3 from "../../public/images2/1283.webp"
import slide4 from "../../public/images2/1284.webp"
import slide5 from "../../public/images2/1285.webp"
import slide6 from "../../public/images2/1286.webp"
import slide7 from "../../public/images2/1287.webp"
import slide8 from "../../public/images2/1288.webp"
import slide9 from "../../public/images2/1289.webp"
import slide10 from "../../public/images2/9.webp"
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
  const data = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10]
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