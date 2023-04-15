import ExportedImage from "next-image-export-optimizer"
import Slider from "react-slick"
import styles from "./slider.module.css"
import girl1 from "../../public/images2/girl1.webp"
import girl2 from "../../public/images2/girl2.webp"
import girl3 from "../../public/images2/girl3.webp"
import girl4 from "../../public/images2/girl4.webp"
import girl5 from "../../public/images2/girl5.webp"
import girl6 from "../../public/images2/girl6.webp"
import girl7 from "../../public/images2/girl7.webp"
import girl8 from "../../public/images2/girl8.webp"
import girl9 from "../../public/images2/girl9.webp"
import girl10 from "../../public/images2/girl10.webp"
import girl11 from "../../public/images2/girl11.webp"
import girl12 from "../../public/images2/girl12.webp"
import girl13 from "../../public/images2/girl13.webp"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { StaticImageData } from "next/image"

export const SliderForGirl:FC<{ setChangeImg: Dispatch<SetStateAction<StaticImageData | string>>; }> = ({setChangeImg}) => {
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
  const data:StaticImageData[] = [girl3, girl13, girl4, girl11, girl5, girl8, girl6, girl12, girl7, girl10, girl1, girl9, girl2]
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
        {data.map((el:StaticImageData, index) => (
          <div className={styles.slideImg} key={`${index}${el}`} onClick={() => setChangeImg(el)}>
            <ExportedImage width={231} height={277} src={el} alt="slide" />
          </div>
        ))}
      </Slider>
    </div>
  )
}