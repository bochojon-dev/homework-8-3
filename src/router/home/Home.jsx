import React, { useEffect, useState } from "react";
import "./Home.css";
import "../../components/users/Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";

function Home() {
  let [data, setData] = useState(null);
  let API_URL = "http://localhost:2005/users";
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <h2 className="home_title">
        FormData va JSON-server <br /> Amaliyot
      </h2>
      <div className="users">
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
    </div>
  );
}

export default Home;
