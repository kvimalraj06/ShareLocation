import React from "react";

import UserItem from "./userItem";

import "./userList.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Results found.</h2>
      </div>
    );
  }
  return (
    <>
      <ul className="users-list">
        {props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              image={user.image}
              placeCount={user.places}
            />
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
