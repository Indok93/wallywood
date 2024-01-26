import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home/Home"
import { Posters } from "../../pages/Posters/Posters"

export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/poster" element={<Posters />} />
        <Route path="/about" element={<Posters />} />
        <Route path="/contact" element={<Posters />} />
        <Route path="/login" element={<Posters />} />
    </Routes>
  )
}
