import ExportedImage from "next-image-export-optimizer"
import { FC } from "react"
import styles from "./footer.module.css"
import email from "../../public/images/email.svg"
import instagram from "../../public/images/instagram.svg"
import facebook from "../../public/images/f.png"
import Link from "next/link"


export const Footer:FC = () => {
  const copyToClipboard = (text:string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error suggesting text to clipboard:', error);
      });
  }
  const handleClick = (event:any) => {
    const text = event.target.innerText;
    copyToClipboard(text);
  }
  const handleScroll = () => {
    window.scrollTo({top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.descriptionWithEmail}>
          <div className={styles.contact}>Contact us to find out how we can help</div>
          <div className={styles.contactEmail}>
            <div className={styles.emailImg}>
              <ExportedImage width={30} height={19} src={email} alt="email" />
            </div>
            <p onClick={handleClick}>codependencyonart@gmail.com</p>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.socialInner}>
            <Link href="https://instagram.com/codependency.on.art?igshid=YmMyMTA2M2Y=" target="_blank" className={styles.socialInstagram}>
              <div className={styles.instagramImg}>
                <ExportedImage width={30.99} height={32} src={instagram} alt="instagram" />
              </div>
              <p>instagram</p>
            </Link>
            <Link href="https://www.facebook.com/codependency.on.art?mibextid=LQQJ4d" target="_blank" className={styles.socialFacebook}>
              <div className={styles.facebookImg}>
                <ExportedImage width={12} height={30} src={facebook} alt="facebook" />
              </div>
              <p>facebook</p>
            </Link>
          </div>
        </div>
      </div>
      <div onClick={handleScroll} className={styles.headerFooter}>Codependencyonart</div>
    </div>
  )
}