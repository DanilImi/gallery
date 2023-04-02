import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import { Layout } from "../layout"
import styles from "./gooseart.module.css"
import gooseart from "../../public/images/gooseart.png"
import { HideGooseart } from "../hide"

export const Gooseart:FC = () => {
  return (
    <Layout
      keyword="logo    branding    product design    apps design    graphic design    ux/ui strategy    ux planning    ui design"
      nameBrand="Gooseart"
      hide={<HideGooseart />}
    >
      <div className={styles.gooseart}>
        <ExportedImage fill src={gooseart} alt="gooseart" />
      </div>
    </Layout>
  )
}