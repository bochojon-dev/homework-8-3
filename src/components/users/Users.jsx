import React from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from "react-redux";
import { removeFromUsers } from "../../context/userSlice";

function Users({ data }) {
  let dispatch = useDispatch();
  return (
    <div className="users__wrapper">
      {/* {data?.map((users) => (
        <div key={users.id} className="users__card">
          <img src={users.gender === "male" ? male : female} alt="user" />
          <h2>{users.name.fname}</h2>
          <p>
            <b>{users.name.lname}</b>
          </p>
          <p>{users.age}</p>
          <button onClick={() => dispatch(removeFromUsers(users))}>
            Remove
          </button>
        </div>
      ))} */}
    </div>
  );
}

export default Users;
