import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home/Home"

export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
    </Routes>
  )
}
