import React, { useContext, useState } from "react";
import axios from "axios";
import { useInputValue } from "../../hooks/useInputValue";
import { Context } from "../../Context";

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
    <>
      <form onSubmit={handleAuth}>
        <input placeholder="username" type="text" {...username} />
        {isRegister && <input placeholder="email" type="email" {...email} />}
        <input placeholder="password" type="password" {...password} />
        <button type="submit">Submit</button>
      </form>
      <span onClick={() => setIsRegister((prev) => !prev)}>
        {isRegister
          ? "Already have an account? - Login"
          : "Don't have an account? - Register"}
      </span>
    </>
  );
};

export default Auth;
