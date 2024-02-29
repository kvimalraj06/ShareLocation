import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./placeItem";

import "./placeList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h1>No results found</h1>
          <button>Share place</button>
        </Card>
        ;
      </div>
    );
  }
  return (
    <ul>
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
