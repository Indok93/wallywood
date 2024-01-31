import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { useAuth } from "../../components/Providers/AuthProvider"

export const Login = () => {
  const {loginData, setLoginData} = useAuth()

  

  return (
    <ContentWrapper title="Login">
      <form action="POST">
        <div>
          <label htmlFor="username">Brugernavn:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="">Adgangskode:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <button type="button">
            Login
          </button>
        </div>
      </form>
    </ContentWrapper>
  )
}
