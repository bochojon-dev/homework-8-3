import React from "react";

const Create = () => {
  let handleCreate = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let user = Object.fromEntries(formData.entries);
    console.log(user);
  };
  return (
    <div>
      <h2>form data</h2>
      <form onSubmit={handleCreate}>
        <input type="text" placeholder="name" name="name" />
        <button>create</button>
      </form>
    </div>
  );
};

export default Create;
