import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/placeList";

const dummyplaces = [
  {
    key: "p1",
    id: "p1",
    imageUrl: "https://www.ahstatic.com/photos/8020_ho_00_p_1024x768.jpg",
    description: "Great hotel to chill...",
    title: "Ibis Chennai1",
    address:
      "690, Anna Salai, Thousand Lights East, Mount Road, Chennai, Tamil Nadu 600006",
    createrId: "u1",
    cooridinates: {
      lat: 13.0205882,
      lng: 80.182003,
    },
  },
  {
    key: "p1",
    id: "p2",
    imageUrl: "https://www.ahstatic.com/photos/8020_ho_00_p_1024x768.jpg",
    description: "Great hotel to chill...",
    title: "Ibis Chennai2",
    address:
      "690, Anna Salai, Thousand Lights East, Mount Road, Chennai, Tamil Nadu 600006",
    createrId: "u2",
    location: {
      lat: 13.0205882,
      lng: 80.182003,
    },
  },
];

const UserPlace = () => {
  const userId = useParams().userId;
  const updatedPlaces = dummyplaces.filter((place) => {
    return place.createrId === userId;
  });
  return <PlaceList items={updatedPlaces} />;
};

export default UserPlace;
