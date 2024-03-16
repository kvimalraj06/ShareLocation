import React, { useReducer, useEffect } from "react";

import { validate } from "../../utils/validators";
import "./input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const {
    id,
    element,
    label,
    type,
    placeholder,
    rows,
    errorText,
    validators,
    onInput,
    initialValue,
    initialValidity,
  } = props;

  const InitialReducerState = {
    value: initialValue || "",
    isValid: initialValidity || false,
    isTouched: false,
  };

  const [initialState, dispatch] = useReducer(
    inputReducer,
    InitialReducerState
  );

  const { value, isValid } = initialState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const inputChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const elementToDisplay =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={inputChangeHandler}
        onBlur={touchHandler}
        value={initialState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={inputChangeHandler}
        onBlur={touchHandler}
        value={initialState.value}
      />
    );
  return (
    <div
      className={`form-control ${
        !initialState.isValid &&
        initialState.isTouched &&
        "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {elementToDisplay}
      {!initialState.isValid && initialState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
