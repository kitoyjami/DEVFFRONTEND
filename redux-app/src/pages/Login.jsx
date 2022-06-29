import { useState, useEffect } from "react"
import {FaSignInAlt} from 'react-icons/fa'


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  
  const onChange = (e) => {
   setFormData( (prevState) => ({
     ...prevState,
     [e.target.name]: e.target.value
   }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  
  const { email, password } = formData
  return (
    <>
    <section className="heading">
        <h1>
          <FaSignInAlt /> Entrar a la App
        </h1>
        <p> Por favor teclea tus credenciales</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="email" 
              id="email"
              name="email"
              className="form-control" 
              value={email} 
              placeholder="Teclea tu email" 
              onChange={onChange} required/>
          </div>
          <div className="form-group">
            <input 
              type="password" 
              id="password"
              name="password"
              className="form-control" 
              value={password} 
              placeholder="Teclea tu contraseña" 
              onChange={onChange} required/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Ingresar
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login