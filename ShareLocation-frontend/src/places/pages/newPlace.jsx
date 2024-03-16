import React from "react";

import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/Button";

import { useForm } from "../../shared/hooks/formHook";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";

import "./placeForm.css";

const NewPlace = () => {
  const initialFormState = {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    isFormValid: false,
  };

  const [formState, inputHandler] = useForm(initialFormState);

  const placeSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description(Atleast 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isFormValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
