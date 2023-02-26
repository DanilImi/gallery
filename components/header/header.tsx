
import styles from "./header.module.css"
import { MenuHeader } from "./menu-header"

export const Header = () => {
  return (
    <header className={styles.sticky}>
      <div className={styles.logo}>Codependencyonart</div>
      <MenuHeader />
    </header>
  )
}
