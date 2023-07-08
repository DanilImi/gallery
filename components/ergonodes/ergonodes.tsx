import ExportedImage from "next-image-export-optimizer"
import { Layout } from "../layout"
import styles from "./ergonodes.module.css"
import { HideErgonodes } from "../hide"
import { dataSetImage } from "@/utils/consts"

export const Ergonodes = () => {
  return (
    <Layout 
      keyword="logo  identity kit"
      nameBrand="Ergonodes logo design"
      description="Ergonodes discovers the size of the Ergo network by finding all nodes participating in it."
      hide={<HideErgonodes />}
    >
      <div className={styles.ergonodes}>
        <ExportedImage fill src={dataSetImage.ergonodes} alt="ergonodes" />
      </div>
    </Layout>
  )
}