import { 
  useTransition, 
  animated, 
} from "@react-spring/web"
import { 
  FC, 
  ReactNode, 
  useState, 
} from "react"
import styles from "./layout.module.css"

interface ILayout {
  children: ReactNode,
  hide?: ReactNode,
  keyword: string,
  nameBrand: string,
  description?: string
}

export const Layout:FC<ILayout> = ({children, hide, keyword, nameBrand, description}) => {
  const [more, setMore] = useState(false)
  const transition = useTransition(more, {
    from: {x: 0, y: -100, opacity: 0},
    enter: {x: 0, y: 0, opacity: 1},
    leave: {x: 0, y: -100, opacity: 0}
  })
  return (
    <div className={styles.raccoon}>
      <div className={`${styles.wrapper} container`}>{children}</div>

      <div className={`${styles.wrapperFooterMore} ${styles.wrapper} container`}>
        <div className={styles.naming}>
          <div className={styles.keyword}>{keyword}</div>
          <div className={styles.nameBrand}>{nameBrand}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.btnMore}>
          <button 
            onClick={() => {
              setMore(true)
            }}
          >more</button>
        </div>
      </div>
      {transition((style, item) => item && (
        <animated.div style={style}>
          {hide}
          <div className={`${styles.wrapperFooterHide} ${styles.wrapper} container`}>
            <div className={styles.btnHide}>
              <button onClick={() => setMore(false)}>hide</button>
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  )
}