import React from "react";

import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/Button";

import { useForm } from "../../shared/hooks/formHook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";

const SignUp = () => {
  const initialFormState = {
    inputs: {
      firstName: {
        value: "",
        isValid: false,
      },
      lastName: {
        value: "",
        isValid: false,
      },
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

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form onSubmit={handleSignUp}>
      <Input
        id="firstName"
        element="input"
        type="text"
        label="First name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a first name."
        onInput={inputHandler}
      />
      <Input
        id="lastName"
        element="input"
        type="text"
        label="Last name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a last name."
        onInput={inputHandler}
      />
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
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
