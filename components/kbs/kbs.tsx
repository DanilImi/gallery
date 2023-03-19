import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import { Layout } from "../layout"
import styles from "./kbs.module.css"
import kbs from "../../public/images/kbs.png"
import { HideKbs } from "../hide"


export const Kbs:FC = () => {
  return (
    <Layout
      keyword="logo    branding         "
      nameBrand="kbs"
      hide={<HideKbs />}
    >
      <div className={styles.kbs}>
        <ExportedImage fill src={kbs} alt="kbs" /> 
      </div>
    </Layout>
  )
}