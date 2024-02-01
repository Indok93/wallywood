import { useForm } from "react-hook-form"
import { useAuth } from "../Providers/AuthProvider"
import axios from "axios"
import styles from "../Form/FormLogin.module.scss";

export const FormLogin = () => {
    const {loginData, setLoginData} = useAuth()
    const {register, handleSubmit, formState: { errors}} = useForm()
  
    const submitHandler = async data => {
      const endpoint = `http://localhost:3000/login`
      try {
        const result = await axios.post(endpoint, data)
        sessionStorage.setItem('access_token', JSON.stringify(result.data))
        setLoginData(result.data)
      } catch (error) {
        console.error(error);
      }
    }
  
    const LogOut = () => {
      sessionStorage.removeItem('access_token')
      setLoginData(null)
    }

  return (
    <>
    {!loginData ? (
        <form action="POST" onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="username">Brugernavn:</label>
            <input type="text" id="username" {...register('username', {required: true})} />
            {errors.username && <span>Brugernavn skal udfyldes!</span>}
          </div>
          <div>
            <label htmlFor="">Adgangskode:</label>
            <input type="password" id="password" {...register('password', {required: true})} />
            {errors.password && <span>Password skal udfyldes!</span>}
          </div>
          <div>
            <button>
              Login
            </button>
          </div>
        </form>
        ) : (
          <div className={styles.wrapper}>
            <h2>Du er logget ind som <strong>{`${loginData.user.firstname} ${loginData.user.lastname}`}</strong></h2>
            <button onClick={() => LogOut()}>Log ud</button>
          </div>
    )}
    </>
  )
}
