import React from "react";
import axios from "axios";

const hendleDelete = (event, deletedID) => {
  let row = event.target.parentElement.parentElement;
  let table = row.parentElement.parentElement;
  row.remove();
  if (table.children[1].children.length < 1) {
    table.parentElement.remove();
  }
  axios.delete(
    `https://64318147d4518cfb0e62f291.mockapi.io/contacts/${deletedID}`
  );
};
const Delete = ({ deletedID }) => {
  return (
    <button
      onClick={(event) => {
        hendleDelete(event, deletedID);
      }}
      className="fa-solid fa-trash"
    ></button>
  );
};

export default Delete;
