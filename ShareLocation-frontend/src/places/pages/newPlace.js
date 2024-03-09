import React from "react";

import Input from "../../shared/components/FormElements/input";

import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import "./newPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        id="i1"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
      />
    </form>
  );
};

export default NewPlace;
