import ExportedImage from "next-image-export-optimizer"
import Slider from "react-slick"
import styles from "./slider.module.css"
import slGooseart1 from "../../public/images/slideGooseart1.png"
import slGooseart2 from "../../public/images/slideGooseart2.png"
import slGooseart3 from "../../public/images/slideGooseart3.png"
import { useEffect, useState } from "react"
import { StaticImageData } from "next/image"

export const SliderForGooseart = () => {
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
  const data:StaticImageData[] = [slGooseart1, slGooseart2, slGooseart3, slGooseart3]
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
          <div key={`${index}${el}`}>
            <ExportedImage width={384} height={352} src={el} alt="slide" />
          </div>
        ))}
      </Slider>
    </div>
  )
}