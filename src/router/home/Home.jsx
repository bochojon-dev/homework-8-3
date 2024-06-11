import React, { useEffect, useState } from "react";
import "./Home.css";
import "../../components/users/Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";

function Home() {
  let [edit, setEdit] = useState(null);
  let handleChange = () => {
    fetch(`${API_URL}/${edit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "aplication/json",
      },
      body: JSON.stringify(edit),
    }).then(() => {
      setReload((p) => !p);
      setEdit(null);
    });
  };
  let [reload, setReload] = useState(true);
  let [data, setData] = useState(null);
  let API_URL = "http://localhost:2005/users";
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [reload]);
  let handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => setReload((p) => !p));
  };

  return (
    <div className="home">
      <h2 className="home_title">
        FormData va JSON-server <br /> Amaliyot
      </h2>
      {edit ? (
        <form>
          <input
            required
            value={edit.name.fname}
            name="fname"
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, fname: e.target.value }))
            }
            type="text"
            placeholder="firstname"
          />
          <input
            required
            value={edit.name.lname}
            name="lname"
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, lname: e.target.value }))
            }
            type="text"
            placeholder="lastname"
          />
          <input
            required
            value={edit.age}
            name="age"
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, age: e.target.value }))
            }
            type="number"
            placeholder="age"
          />
          <select
            required
            value={edit.gender}
            name="gender"
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, gender: e.target.value }))
            }
          >
            <option value="">gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button type="submit" onClick={handleChange}>
            Save
          </button>
        </form>
      ) : (
        <></>
      )}
      <div className="users">
        {data?.map((users) => (
          <div key={users.id} className="users__card">
            <img src={users.gender === "male" ? male : female} alt="user" />
            <h2>{users?.name.fname}</h2>
            <p>
              <b>{users?.name.lname}</b>
            </p>
            <p>{users.age}</p>
            <button onClick={() => handleDelete(users.id)}>remove</button>
            <button onClick={() => setEdit(users)}>edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
