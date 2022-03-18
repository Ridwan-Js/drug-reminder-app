import React from "react";

const UserItem = (props) => {
  return (
    <li className="mt-3">
      <div className="card px-3">
        <div>
          <label>FirrstName:</label>
          {props.firstName}
        </div>
        <div>
          <label>LastName:</label>
          {props.lastName}
        </div>
      </div>
    </li>
  );
};

export default UserItem;
