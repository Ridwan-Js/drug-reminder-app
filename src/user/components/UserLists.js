import React from "react";
import UserItem from "./UserItem";

const UserLists = (props) => {
  return (
    <ul className="list-unstyled">
      {props.items.map((user) => (
        <UserItem
          firstName={user.userInfo.firstName}
          lastName={user.userInfo.lastName}
          key={user.time}
        />
      ))}
    </ul>
  );
};

export default UserLists;
