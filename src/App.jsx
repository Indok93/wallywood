import './App.scss'
import { AppRouter } from './components/AppRouter/AppRouter'
import { Footer } from './components/partials/Footer/Footer'
import { Header } from './components/partials/Header/Header'
import { Main } from './components/partials/Main/Main'

function App() {

  return (
    <>
      <Header></Header>
      <Main>
        <AppRouter />
      </Main>
      <Footer></Footer>
    </>
  )
}

export default App
