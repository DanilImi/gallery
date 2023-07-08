import ExportedImage from "next-image-export-optimizer"
import { Layout } from "../layout"
import styles from "./aline.module.css"
import { FC } from "react"
import { HideAline } from "../hide"
import { dataSetImage } from "@/utils/consts"

export const Aline:FC = () => {
  return (
    <Layout
      keyword="logo  identity kit"
      nameBrand="D’ aline"
      description="A unique brand of handcrafted gemstone jewelry"
      hide={<HideAline />}
    >
      <div className={styles.aline}>
        <ExportedImage fill src={dataSetImage.aline} alt="aline" />
      </div>
    </Layout>
  )
}