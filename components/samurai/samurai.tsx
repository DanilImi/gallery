import ExportedImage from "next-image-export-optimizer"
import { Layout } from "../layout"
import styles from "./samurai.module.css"
import samurai from "../../public/images/samurai.png"
import { HideSamurai } from "../hide"

export const Samurai = () => {
  return (
    <Layout
      keyword="illustrations   art"
      nameBrand="Almost Samurai"
      hide={<HideSamurai />}
    >
      <div className={styles.samurai}>
        <ExportedImage fill src={samurai} alt="samurai" />
      </div>
    </Layout>
  )
}