import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import { HideLaptop } from "components/hide"
import { Layout } from "../layout"
import laptop from "../../public/images2/laptop.webp"
import styles from "./laptop.module.css"


export const Laptop:FC = () => {
  return (
    <Layout 
      hide={<HideLaptop />} 
      keyword="ui branding indentity kit"
      nameBrand="Satergo wallet for ERGO"
      description="The desktop wallet for the Ergo cryptocurrency, with embedded node functionality"
    >
      <div className={styles.laptop}>
        <ExportedImage fill src={laptop} alt="laptop" />
      </div>
    </Layout>
  )
}