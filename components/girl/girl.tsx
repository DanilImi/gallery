import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import { Layout } from "../layout"
import styles from "./girl.module.css"
import { HideGirl } from "../hide"
import { dataSetImage } from "@/utils/consts"

export const Girl:FC = () => {
  return (
    <Layout
      keyword="illustration    merch "
      nameBrand="Merch for beautiful girls"
      hide={<HideGirl />}
    >
      <div className={styles.girl}>
        <ExportedImage fill src={dataSetImage.girl} alt="girl" />
      </div>
    </Layout>
  )
}