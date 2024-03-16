import React from "react";

import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/Button";

import { useForm } from "../../shared/hooks/formHook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";

const Login = ({ auth }) => {
  const initialFormState = {
    inputs: {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    isFormValid: false,
  };

  const [formState, inputHandler] = useForm(initialFormState);

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login();
    console.log(formState.inputs);
  };

  return (
    <form onSubmit={handleLogin}>
      <Input
        id="email"
        element="input"
        type="email"
        label="E-mail"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email address."
        onInput={inputHandler}
      />
      <Input
        id="password"
        element="input"
        type="password"
        label="Password"
        validators={[VALIDATOR_MINLENGTH(8)]}
        errorText="Please enter a valid password, atleast 8 characters."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isFormValid}>
        Login
      </Button>
    </form>
  );
};

export default Login;
