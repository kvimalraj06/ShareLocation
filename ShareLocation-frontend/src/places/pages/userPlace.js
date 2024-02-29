import React from "react";

import PlaceList from "../components/placeList";

const dummyplaces = [
  {
    key: "p1",
    id: "p1",
    imageUrl: "https://www.ahstatic.com/photos/8020_ho_00_p_1024x768.jpg",
    description: "Great hotel to chill...",
    title: "Ibis Chennai",
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
    id: "p1",
    imageUrl: "https://www.ahstatic.com/photos/8020_ho_00_p_1024x768.jpg",
    description: "Great hotel to chill...",
    title: "Ibis Chennai",
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
  return <PlaceList items={dummyplaces} />;
};

export default UserPlace;
