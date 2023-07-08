import ExportedImage from "next-image-export-optimizer"
import { FC, ReactNode } from "react"
import Slider from "react-slick"
import styles from "./slider-mini.module.css"

interface ISliderMini {
  data: string[], 
  description?: ReactNode,
  width: number[],
  height: number[],
  widthDots: string,
}

export const SliderMini:FC<ISliderMini> = ({data, description, width, height, widthDots = ""}) => {
  const settings = {
    dots: true,
    autoplay: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    dotsClass: `slick-el ${widthDots}`,
  }
  return (
    <div className={styles.wrapperSliderMini}>
      <Slider {...settings}>
        {data.map((el:string, index) => (
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