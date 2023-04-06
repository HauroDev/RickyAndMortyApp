import { useState } from "react";
import validate from "./validation";
import './Form.css'

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });

    setErrors(validate({
      ...userData,
      [event.target.name]: event.target.value
    }));

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form
      className="component-login"
      onSubmit={handleSubmit}>

      <label htmlFor="email">Email:</label>
      <input
        name="email"
        type="text"
        placeholder="Escribi tu email..."
        value={userData.email}
        onChange={handleChange}
        className={errors.email && 'warning'}
      />
      {errors.email &&
        <p className="danger">{errors.email}</p>}

      <label htmlFor="password">Password:</label>
      <input
        name="password"
        type="text"
        placeholder="Escribi tu password..."
        value={userData.password}
        onChange={handleChange}
        className={errors.password && 'warning'}
      />
      {errors.password &&
        <p className="danger">{errors.password}</p>}

      <br />
      <button
        type="submit"
        disabled={errors.password || errors.email?true:false}>
        Submit
      </button>
    </form>
  )
};

export default Form;