import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/Button";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import "./newPlace.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formValid = formValid && action.isValid;
        } else {
          formValid = formValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isFormValid: formValid,
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const initialReducerState = {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isFormValid: false,
  };
  const [initialState, dispatch] = useReducer(formReducer, initialReducerState);

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      inputId: id,
      value,
      isValid,
    });
  }, []);

  return (
    <form className="place-form">
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
      <Button type="submit" disabled={!initialState.isFormValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
