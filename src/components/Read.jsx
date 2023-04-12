import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Delete from "./Delete";

function editList(itm) {
  let id = itm.id;
  let firstName = itm.firstName;
  let lastName = itm.lastName;
  axios.put(`https://64318147d4518cfb0e62f291.mockapi.io/contacts/${id}`, {
    firstName,
    lastName,
  });
}
const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://64318147d4518cfb0e62f291.mockapi.io/contacts`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  if (APIData.length !== 0) {
    return (
      <div className="table__container  border-t-2	pt-10">
        <table >
          <thead>
            <tr>
              <td>
                <div className="text-lg text-white bg-sky-700 w-52 mr-2 p-1 rounded ">
                  First Name
                </div>
              </td>
              <td>
                <div className="text-lg text-white bg-sky-700 w-52  mr-2 p-1 rounded">
                  Last Name
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {APIData.map((itm) => {
              return (
                <tr>
                  <td>
                    <input
                      onChange={itm.firstName}
                      disabled
                      defaultValue={itm.firstName}
                      className="bg-sky-100 w-52 mr-2 p-1 text-center	 rounded"
                    ></input>
                  </td>
                  <td>
                    <input
                      disabled
                      defaultValue={itm.lastName}
                      className="bg-sky-100 w-52 mr-2 p-1 text-center		 rounded"
                    ></input>
                  </td>
                  <td>
                    <button
                      className="fa-solid fa-edit"
                      onClick={(event) => {
                        let targetRow =
                          event.target.parentElement.parentElement;
                        let inputD = targetRow.querySelectorAll("input");
                        let btn = event.target;
                        if (btn.className === "fa-solid fa-edit") {
                          inputD.forEach((a) => {
                            a.disabled = false;
                          });
                          btn.className = "fa-solid fa-save";
                        } else {
                          itm.firstName = inputD[0].value;
                          itm.lastName = inputD[1].value;
                          inputD.forEach((a) => {
                            a.disabled = true;
                          });
                          btn.className = "fa-solid fa-edit";
                          editList(itm);
                        }
                      }}
                    ></button>
                  </td>
                  <td>
                    <Delete deletedID={itm.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Read;
