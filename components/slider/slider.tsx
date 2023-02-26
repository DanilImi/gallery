import ExportedImage from "next-image-export-optimizer"
import Slider from "react-slick"
import styles from "./slider.module.css"
import slide1 from "../../public/images/6.svg"
import slide2 from "../../public/images/7.svg"
import slide3 from "../../public/images/8.svg"
import slide4 from "../../public/images/9.svg"
import { useEffect, useState } from "react"

export const SliderContainer = () => {
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
  const data = [slide2, slide2, slide3, slide3]
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
        {data.map((el:string, index) => (
          <div key={`${index}${el}`}>
            <ExportedImage width={380} height={226} src={el} alt="slide" />
          </div>
        ))}
      </Slider>
    </div>
  )
}