import React, { useContext } from "react";

import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";

import { AuthContext } from "../../shared/context/authContext";

import "./placeItem.css";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);

  const onDeleteClick = () => {
    props.handleDeletePlace(props.id);
  };

  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        {auth.isLoggedIn && (
          <div className="place-item__actions">
            {/* <Button inverse>View on map</Button> */}
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger onClick={() => onDeleteClick()}>
              Delete
            </Button>
          </div>
        )}
      </Card>
    </li>
  );
};

export default PlaceItem;
