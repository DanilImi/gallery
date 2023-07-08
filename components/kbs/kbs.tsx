import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import { Layout } from "../layout"
import styles from "./kbs.module.css"
import { HideKbs } from "../hide"
import { dataSetImage } from "@/utils/consts"


export const Kbs:FC = () => {
  return (
    <Layout
      keyword="logo    branding         "
      nameBrand="kbs"
      hide={<HideKbs />}
    >
      <div className={styles.kbs}>
        <ExportedImage fill src={dataSetImage.kbs} alt="kbs" /> 
      </div>
    </Layout>
  )
}