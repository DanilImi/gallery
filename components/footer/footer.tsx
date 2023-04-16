import { FC, useEffect, useState } from "react"
import styles from "./footer.module.css"
import Link from "next/link"
import {RiFacebookBoxLine} from "react-icons/ri"
import {CgInstagram} from "react-icons/cg"
import {MdOutlineEmail} from "react-icons/md"


export const Footer:FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
          {windowWidth <= 390 && <div className={styles.contactMobile}>Do you want to cooperate with us?</div>}
          <div className={styles.contact}>Contact us to find out how we can help</div>
          <div className={styles.contactEmail}>
            <MdOutlineEmail size={32} className={styles.reactIconEmail} />
            <p onClick={handleClick}>codependencyonart@gmail.com</p>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.socialInner}>
            <Link href="https://instagram.com/codependency.on.art?igshid=YmMyMTA2M2Y=" target="_blank" className={styles.socialInstagram}>
              <CgInstagram size={32} className={styles.reactIconInstagram} />
              <p>instagram</p>
            </Link>
            <Link href="https://www.facebook.com/codependency.on.art?mibextid=LQQJ4d" target="_blank" className={styles.socialFacebook}>
              <RiFacebookBoxLine size={32} className={styles.reactIconFacebook} />
              <p>facebook</p>
            </Link>
          </div>
        </div>
      </div>
      <div onClick={handleScroll} className={styles.headerFooter}>Codependencyonart</div>
    </div>
  )
}