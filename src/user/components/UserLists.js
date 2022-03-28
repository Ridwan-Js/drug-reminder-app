import React from "react";
import UserItem from "./UserItem";

const UserLists = (props) => {
  return (
    <ul className="list-unstyled">
      {props.items.map((user) => (
        <UserItem
          firstName={user.firstName}
          lastName={user.lastName}
          key={user.phoneNUmber}
          id={user.id}
          phoneNumber={user.phoneNUmber}
        />
      ))}
    </ul>
  );
};

export default UserLists;
