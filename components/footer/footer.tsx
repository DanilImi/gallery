import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import styles from "./footer.module.css"
import email from "../../public/images/email.svg"
import instagram from "../../public/images/instagram.svg"
import facebook from "../../public/images/f.png"


export const Footer:FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.descriptionWithEmail}>
          <div className={styles.contact}>Contact us to find out how we can help</div>
          <div className={styles.contactEmail}>
            <div className={styles.emailImg}>
              <ExportedImage width={30} height={19} src={email} alt="email" />
            </div>
            <p>codependencyonart@gmail.com</p>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.socialInner}>
            <div className={styles.socialInstagram}>
              <div className={styles.instagramImg}>
                <ExportedImage width={30.99} height={32} src={instagram} alt="instagram" />
              </div>
              <p>instagram</p>
            </div>
            <div className={styles.socialFacebook}>
              <div className={styles.facebookImg}>
                <ExportedImage width={12} height={30} src={facebook} alt="facebook" />
              </div>
              <p>facebook</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerFooter}>Codependencyonart</div>
    </div>
  )
}