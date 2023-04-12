import "./App.css";
import axios from "axios";
import React from "react";
import Read from "./components/Read";
import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const postData = () => {
    axios
      .post(`https://64318147d4518cfb0e62f291.mockapi.io/contacts`, {
        firstName,
        lastName,
      })
      .then(()=>{window.location.reload()});
  };
  return (
    <div className="container">
      <div className="create-form flex flex-col items-center 	m-10">
        <input
          className=" w-72 py-4 pl-2  bg-sky-50 mb-2 rounded"
          placeholder="First Name"
          id="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          className=" w-72 py-4 pl-2 bg-sky-50 mb-2 rounded"
          id="lastName"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <button
          type="submit"
          className="bg-sky-300 text-white w-72"
          onClick={postData}
        >
          Add User
        </button>
      </div>
      <div className="users">
        <Read></Read>
      </div>
    </div>
  );
};

export default App;
