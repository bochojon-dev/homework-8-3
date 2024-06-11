import React from "react";
import "./CreateUser.css";
// import { useDispatch } from "react-redux";
// import { addToUsers } from "../../context/userSlice";

function CreateUser() {
  // const dispatch = useDispatch();
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let formData = new FormData(event.target);
  //   let newUser1 = Object.fromEntries(formData.entries());
  //   let newUser = {
  //     id: new Date().getTime(),
  //     fname,
  //     lname,
  //     age: +age,
  //     gender,
  //   };
  //   dispatch(addToUsers(newUser));
  //   setFname("");
  //   setAge("");
  //   setGender("");
  //   setLname("");
  // };
  let API_URL = "http://localhost:2005/users";
  let handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let newUser = Object.fromEntries(formData.entries());
    let { age, lname, fname, gender } = newUser;
    let user = {
      age,
      gender,
      name: {
        fname,
        lname,
      },
    };
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "aplication/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="create__user-form" action="">
        <input
          required
          // value={fname}
          name="fname"
          // onChange={(e) => setFname(e.target.value)}
          type="text"
          placeholder="firstname"
        />
        <input
          required
          // value={lname}
          name="lname"
          // onChange={(e) => setLname(e.target.value)}
          type="text"
          placeholder="lastname"
        />
        <input
          required
          // value={age}
          name="age"
          // onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="age"
        />
        <select
          required
          // value={gender}
          name="gender"
          // onChange={(e) => setGender(e.target.value)}
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create user</button>
      </form>
    </div>
  );
}

export default CreateUser;
