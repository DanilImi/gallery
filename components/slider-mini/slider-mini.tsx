import ExportedImage from "next-image-export-optimizer"
import { StaticImageData } from "next/image"
import { FC, ReactNode } from "react"
import Slider from "react-slick"
import styles from "./slider-mini.module.css"

interface ISliderMini {
  data: string[] | StaticImageData[], 
  description?: ReactNode,
  width: number[],
  height: number[]
}

export const SliderMini:FC<ISliderMini> = ({data, description, width, height}) => {
  const settings = {
    dots: true,
    autoplay: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    dotsClass: "slick-el"
  }
  return (
    <div className={styles.wrapperSliderMini}>
      <Slider {...settings}>
        {data.map((el:string | StaticImageData, index) => (
          <div key={`${index}${el}`}>
            <ExportedImage width={width[index]} height={height[index]} src={el} alt="slide" />
          </div>
        ))}
      </Slider>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  )
}