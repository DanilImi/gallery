import ExportedImage from "next-image-export-optimizer"
import { Layout } from "../layout"
import satergo from "../../public/images/satergo.png"
import styles from "./satergo.module.css"
import { HideSatergo } from "../hide"

export const Satergo = () => {
  return (
    <Layout 
      keyword="logo  identity kit"
      nameBrand="Satergo wallet logo design"
      hide={<HideSatergo />}
    >
      <div className={styles.satergo}>
        <ExportedImage fill src={satergo} alt="satergo" />
      </div>
    </Layout>
  )
}