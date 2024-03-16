import React, { useState } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/placeList";
import DeleteConfirmationPopup from "../../shared/components/ConfirmationDialog/confirmationPopup";

import { DUMMY_PLACES as dummyplaces } from "../utlils/constants/userPlace";

const UserPlace = () => {
  const [deletePlaceId, setDeletePlaceId] = useState();
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const userId = useParams().userId;
  const updatedPlaces = dummyplaces.filter((place) => {
    return place.createrId === userId;
  });

  const handleDeletePlaceId = (userId) => {
    setDeletePlaceId(userId);
    setIsConfirmationOpen(true);
  };

  const handleDeletePlace = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <>
      <div>
        <DeleteConfirmationPopup
          title="Confirm delete"
          text="Are you sure you want to delete this place ?"
          onDelete={handleDeletePlace}
          isOpen={isConfirmationOpen}
          onClose={() => setIsConfirmationOpen(false)}
        />
      </div>
      <PlaceList
        items={updatedPlaces}
        handleDeletePlace={handleDeletePlaceId}
      />
    </>
  );
};

export default UserPlace;
