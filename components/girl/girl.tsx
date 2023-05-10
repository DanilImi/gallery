import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import { Layout } from "../layout"
import styles from "./girl.module.css"
import girl from "../../public/images2/girl14.webp"
import { HideGirl } from "../hide"

export const Girl:FC = () => {
  return (
    <Layout
      keyword="illustration    merch "
      nameBrand="Merch for beautiful girls"
      hide={<HideGirl />}
    >
      <div className={styles.girl}>
        <ExportedImage fill src={girl} alt="girl" />
      </div>
    </Layout>
  )
}