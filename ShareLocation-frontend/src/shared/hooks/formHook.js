import { useReducer, useCallback } from "react";

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

export const useForm = (initialReducerState) => {
  const [formState, dispatch] = useReducer(formReducer, initialReducerState);

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      inputId: id,
      value,
      isValid,
    });
  }, []);

  return [formState, inputHandler];
};
