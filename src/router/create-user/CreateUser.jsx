import React, { useState } from "react";
import "./CreateUser.css";
import { useDispatch } from "react-redux";
import { addToUsers } from "../../context/userSlice";

function CreateUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(event.target);
    let newUser1 = Object.fromEntries(formData.entries());
    // console.log(newUser);
    //   };
    let newUser = {
      id: new Date().getTime(),
      name,
      profession,
      age: +age,
      gender,
      address,
      phone,
    };
    dispatch(addToUsers(newUser));
    setName("");
    setAge("");
    setGender("");
    setProfession("");
    setAddress("");
    setPhone("");
  };
  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="create__user-form" action="">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          // onChange={handleChange}
          type="text"
          placeholder="name"
        />
        <input
          required
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          // onChange={handleChange}
          type="text"
          placeholder="profession"
        />
        <input
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          // onChange={handleChange}
          type="text"
          placeholder="address"
        />
        <input
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          // onChange={handleChange}
          type="number"
          placeholder="age"
        />
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          // onChange={handleChange}
          type="text"
          placeholder="phone"
        />
        <select
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
