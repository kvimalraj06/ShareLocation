import React from "react";

import UserList from "../components/userList";

const Users = (props) => {
  const users = [
    {
      id: 1,
      name: "vimal",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNFVeDoQtfThwJv4xIt-cwzir1coXSKiX3NpsSZOfF_EMPTnfG0-P9W1nSyfezD9s88SQeKA",
      places: 3,
    },
  ];
  return (
    <>
      <UserList items={users} />
    </>
  );
};

export default Users;
