import ExportedImage from "next-image-export-optimizer"
import { Layout } from "../layout"
import styles from "./emporas.module.css"
import emporas from "../../public/images2/emporas.webp"
import { HideEmporas } from "../hide"


export const Emporas = () => {
  return (
    <Layout
      keyword="logo    branding    product design"
      nameBrand="emporas"
      hide={<HideEmporas />}
    >
      <div className={styles.emporas}>
        <ExportedImage fill src={emporas} alt="emporas" />
      </div>
    </Layout>
  )
}