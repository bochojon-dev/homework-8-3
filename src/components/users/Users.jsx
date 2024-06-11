import React, { useEffect, useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";

function Users() {
  let [data, setData] = useState(null);
  let API_URL = "http://localhost:2005/users";
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="users__wrapper">
      {data?.map((users) => (
        <div key={users.id} className="users__card">
          <img src={users.gender === "male" ? male : female} alt="user" />
          <h2>{users?.fname}</h2>
          <p>
            <b>{users?.lname}</b>
          </p>
          <p>{users.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
