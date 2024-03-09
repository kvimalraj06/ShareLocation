import React from "react";

import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./placeItem";

import "./placeList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h1>No places found. Add place</h1>
          <Button to="/places/new">Share place</Button>
        </Card>
        ;
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          description={place.description}
          title={place.title}
          address={place.address}
          createrId={place.creatorId}
          cooridinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
