import ExportedImage from "next-image-export-optimizer"
import { Layout } from "../layout"
import styles from "./emporas.module.css"
import { HideEmporas } from "../hide"
import { dataSetImage } from "@/utils/consts"


export const Emporas = () => {
  return (
    <Layout
      keyword="logo    branding    product design"
      nameBrand="emporas"
      hide={<HideEmporas />}
    >
      <div className={styles.emporas}>
        <ExportedImage fill src={dataSetImage.emporas} alt="emporas" />
      </div>
    </Layout>
  )
}