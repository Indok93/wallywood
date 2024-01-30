import { Outlet } from "react-router-dom"
import { GenreNav } from "../../components/Posters/GenreNav"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import styles from "../Posters/Posters.module.scss"

export const Posters = () => {
  return (
    <ContentWrapper title="Plakater">
      <div className={styles.wrapper}>
        <GenreNav />
        <Outlet />
      </div>
    </ContentWrapper>
  )
}
