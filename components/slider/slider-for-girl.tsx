import ExportedImage from "next-image-export-optimizer"
import Slider from "react-slick"
import styles from "./slider.module.css"
import girl1 from "../../public/images/girl1.png"
import girl2 from "../../public/images/girl2.png"
import girl3 from "../../public/images/girl3.png"
import girl4 from "../../public/images/girl4.png"
import girl5 from "../../public/images/girl5.png"
import { useEffect, useState } from "react"
import { StaticImageData } from "next/image"

export const SliderForGirl = () => {
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
  const data:StaticImageData[] = [girl1, girl2, girl3, girl4, girl5, girl5, girl5]
  const settings = {
    autoplay: true,
    Infinity: true,
    speed: 500,
    slidesToShow: windowWidth <= 1400 ? (windowWidth <= 1200 ? (windowWidth <= 990 ? 3 : 4) : 4) : 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false
  }
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {data.map((el:StaticImageData, index) => (
          <div key={`${index}${el}`}>
            <ExportedImage width={231} height={277} src={el} alt="slide" />
          </div>
        ))}
      </Slider>
    </div>
  )
}