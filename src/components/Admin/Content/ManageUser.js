import React from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage user</div>
      <div className="users-content">
        <div>
          <button>Add new user</button>
        </div>
        <div>table user</div>
        <ModalCreateUser></ModalCreateUser>
      </div>
    </div>
  );
};

export default ManageUser;
