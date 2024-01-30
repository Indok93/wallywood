import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home/Home"
import { Posters } from "../../pages/Posters/Posters"
import { PosterList } from "../Posters/PosterList"
import { PosterDetails } from "../Posters/PosterDetails"
import { About } from "../../pages/About/About"
import { Contact } from "../../pages/Contact/Contact"
import { Login } from "../../pages/Login/Login"
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound"

export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/posters" element={<Posters />}>
          <Route path=":genre" element={<PosterList />} />
          <Route path=":genre/:poster" element={<PosterDetails />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
