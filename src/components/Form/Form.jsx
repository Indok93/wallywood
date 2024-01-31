import styles from "../Form/Form.module.scss";
import { useForm } from "react-hook-form";

export const Form = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const submitForm = data  => {
      console.log(data);
    }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="name">Dit navn:</label>
          <input id="name" type="text" {...register('name', {required: true, pattern: /^[A-Za-z]+$/i})} />
          {errors.name && errors.name.type === 'required' && <span className="error">Du skal udfylde feltet!</span>}
          {errors.name && errors.name.type === 'pattern' && <span className="error">Navnet må kun indeholde gyldige bogstaver!</span>}
        </div>
        <div>
          <label htmlFor="email">Din email:</label>
          <input id="email" type="email" {...register('email', {required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/})} />
          {errors.email && errors.email.type === 'required' && <span className="error">Du skal udfylde feltet!</span>}
          {errors.email && errors.email.type === 'pattern' && <span className="error">Du skal udfylde med en gyldig email!</span>}
        </div>
        <div>
          <label htmlFor="message">Din besked:</label>
          <textarea id="message" cols="30" rows="10" {...register('message')} />
          {errors.message && <span className="error">Du skal udfylde feltet!</span>}
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  )
}
