import { useState } from "react";
import validate from "./validation";
import { Button, P, LoginForm, Input, Label, Container } from "./styledForm";

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
    <Container>
      <h2>Login page</h2>
      <LoginForm
        onSubmit={handleSubmit}>

        <Label htmlFor="email">Email:</Label>
        <Input
          name="email"
          type="text"
          placeholder="Escribi tu email..."
          value={userData.email}
          onChange={handleChange}
          isWarning={errors.email && true}
        />

        <Label htmlFor="password">Password:</Label>
        <Input
          name="password"
          type="password"
          placeholder="Escribi tu password..."
          value={userData.password}
          onChange={handleChange}
          isWarning={errors.password && true}
        />
        {errors.email &&
          <P isError>{errors.email}</P>}
        {errors.password &&
          <P isError>{errors.password}</P>}
        <br />
        <Button
          type="submit"
          disabled={errors.password || errors.email}>
          Submit!
        </Button>
      </LoginForm>
    </Container>
  )
};

export default Form;