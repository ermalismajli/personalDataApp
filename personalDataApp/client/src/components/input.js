import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Input() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault(); // prevent default form submission behavior
    axios
      .post("http://localhost:5000/input", formData) // submit form data with axios to the server
      .then((response) => {
        console.log(response.data); // handle successful response
      })
      .catch((error) => {
        console.error(error); // handle error
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData); // handle successful
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleInputChange}
        />
        <p></p>
        <input
          type="text"
          name="surname"
          placeholder="Enter surname"
          onChange={handleInputChange}
        />
        <p></p>
        <input
          type="text"
          name="age"
          placeholder="Enter age"
          onChange={handleInputChange}
        />
        <p></p>
        <input
          type="text"
          name="university"
          placeholder="Enter university"
          onChange={handleInputChange}
        />
        <p></p>

        <button type="submit" name="submit">
          Add a person
        </button>
      </form>
      <p>
        <button onClick={() => navigate("/persons")}>Persons</button>
      </p>
    </>
  );
}
