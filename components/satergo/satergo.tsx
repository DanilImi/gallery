import ExportedImage from "next-image-export-optimizer"
import { Layout } from "../layout"
import styles from "./satergo.module.css"
import { HideSatergo } from "../hide"
import { dataSetImage } from "@/utils/consts"

export const Satergo = () => {
  return (
    <Layout 
      keyword="logo  identity kit"
      nameBrand="Satergo wallet logo design"
      hide={<HideSatergo />}
    >
      <div className={styles.satergo}>
        <ExportedImage fill src={dataSetImage.satergo} alt="satergo" />
      </div>
    </Layout>
  )
}