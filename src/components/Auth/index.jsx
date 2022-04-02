import React, { useContext, useState } from "react";
import axios from "axios";
import { useInputValue } from "../../hooks/useInputValue";
import { Context } from "../../Context";
import { AlternateAuth, Card, Container, Form, Input, SubmitButton, Title } from "./Auth";

const Auth = () => {
  const { activateAuth } = useContext(Context);
  const [isRegister, setIsRegister] = useState(true);
  const email = useInputValue("");
  const username = useInputValue("");
  const password = useInputValue("");

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/${isRegister ? "register" : "login"}`,
        {
          username: username.value,
          email: isRegister ? email.value : "",
          password: password.value,
        }
      );
      res.data && activateAuth(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Card>
        <Title>{isRegister ? "Register" : "Login"}</Title>
        <Form onSubmit={handleAuth}>
          <Input placeholder="username" type="text" {...username} />
          {isRegister && <Input placeholder="email" type="email" {...email} />}
          <Input placeholder="password" type="password" {...password} />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
        <AlternateAuth onClick={() => setIsRegister((prev) => !prev)}>
          {isRegister
            ? "Already have an account? - Login"
            : "Don't have an account? - Register"}
        </AlternateAuth>
      </Card>
    </Container>
  );
};

export default Auth;
