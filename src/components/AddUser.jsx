import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addUser } from "../services/api";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 50%;
  margin: 10px auto;
  border: none;
`;

const initialValue = {
  name: "",
  username: "",
  email: "",
};

const AddUser = () => {
  const [inputValue, setInputValue] = useState(initialValue);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    
  };

  const addUsersDetails = async () => {
    await addUser(inputValue);
    navigate('/users')
  };

  return (
    <>
    <Form>
      <label>
        Name
        <Input
          onChange={onValueChange}
          type="text"
          placeholder="Enter Your name"
          name="name"
        />
      </label>

      <label>
        Username
        <Input
          onChange={onValueChange}
          type="text"
          placeholder="Enter Your username"
          name="username"
        />
      </label>
      <label>
        Email
        <Input
          onChange={onValueChange}
          type="email"
          placeholder="Enter Your email"
          name="email"
        />
      </label>

    </Form>
      <button onClick={() => addUsersDetails()} style={{ width: "50%" }}>
        AddUser
      </button>
    </>
  );
};

export default AddUser;
