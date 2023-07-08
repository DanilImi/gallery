import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import { Layout } from "../layout"
import styles from "./gooseart.module.css"
import { HideGooseart } from "../hide"
import { dataSetImage } from "@/utils/consts"

export const Gooseart:FC = () => {
  return (
    <Layout
      keyword="logo    branding    product design    apps design    graphic design    ux/ui strategy    ux planning    ui design"
      nameBrand="Gooseart"
      hide={<HideGooseart />}
    >
      <div className={styles.gooseart}>
        <ExportedImage fill src={dataSetImage.gooseart} alt="gooseart" />
      </div>
    </Layout>
  )
}