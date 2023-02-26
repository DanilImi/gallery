import ExportedImage from "next-image-export-optimizer"
import { Layout } from "../layout"
import aline from "../../public/images/aline.png"
import styles from "./aline.module.css"
import { FC } from "react"
import { HideAline } from "../hide"

export const Aline:FC = () => {
  return (
    <Layout
      keyword="logo  identity kit"
      nameBrand="D’ aline"
      description="A unique brand of handcrafted gemstone jewelry"
      hide={<HideAline />}
    >
      <div className={styles.aline}>
        <ExportedImage fill src={aline} alt="aline" />
      </div>
    </Layout>
  )
}