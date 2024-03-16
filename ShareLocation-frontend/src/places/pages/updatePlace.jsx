import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/Button";

import { useForm } from "../../shared/hooks/formHook";

import "./placeForm.css";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";
import { DUMMY_PLACES as dummyPlaces } from "../utlils/constants/userPlace";

const UppdatePlace = () => {
  const placeID = useParams().placeId;
  const identifiedPlace = dummyPlaces.find((place) => place.id === placeID);

  const initialFormState = {
    inputs: {
      title: {
        value: identifiedPlace.title,
        isValid: true,
      },
      description: {
        value: identifiedPlace.description,
        isValid: true,
      },
    },
    isFormValid: true,
  };

  const [formState, inputHandler] = useForm(initialFormState);

  const updatePlaceHandler = (e) => {
    e.preventDefault();
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Cound not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={updatePlaceHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValidity={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description(Atleast 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValidity={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isFormValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UppdatePlace;
