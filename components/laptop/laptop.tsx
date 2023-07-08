import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import { HideLaptop } from "components/hide"
import { Layout } from "../layout"
import styles from "./laptop.module.css"
import { dataSetImage } from "@/utils/consts"


export const Laptop:FC = () => {
  return (
    <Layout 
      hide={<HideLaptop />} 
      keyword="ui branding indentity kit"
      nameBrand="Satergo wallet for ERGO"
      description="The desktop wallet for the Ergo cryptocurrency, with embedded node functionality"
    >
      <div className={styles.laptop}>
        <ExportedImage fill src={dataSetImage.laptop} alt="laptop" />
      </div>
    </Layout>
  )
}