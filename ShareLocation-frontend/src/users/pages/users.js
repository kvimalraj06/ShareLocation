import React from "react";

import UserList from "../components/userList";

const Users = (props) => {
  const users = [
    {
      id: "u1",
      name: "quixotic",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNFVeDoQtfThwJv4xIt-cwzir1coXSKiX3NpsSZOfF_EMPTnfG0-P9W1nSyfezD9s88SQeKA",
      places: 3,
    },
    {
      id: "u2",
      name: "de_spook",
      image: "https://m.media-amazon.com/images/I/71BQOludsuL.jpg",
      places: 2,
    },
  ];
  return (
    <>
      <UserList items={users} />
    </>
  );
};

export default Users;
