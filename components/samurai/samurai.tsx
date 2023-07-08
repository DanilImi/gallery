import ExportedImage from "next-image-export-optimizer"
import { Layout } from "../layout"
import styles from "./samurai.module.css"
import { HideSamurai } from "../hide"
import { dataSetImage } from "@/utils/consts"

export const Samurai = () => {
  return (
    <Layout
      keyword="illustrations   art"
      nameBrand="Almost Samurai"
      hide={<HideSamurai />}
    >
      <div className={styles.samurai}>
        <ExportedImage fill src={dataSetImage.samurai} alt="samurai" />
      </div>
    </Layout>
  )
}