import React, { useState } from "react";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  function makeUser() {
    console.warn("called makeuser");
  }
  return (
    <div>
      <h1>Make A New USer</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        name="UserName"
        value={name}
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        value={email}
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => setAge(e.target.value)}
        name="age"
        value={age}
      />
      <br />
      <br />
      <butto onClick={makeUser}>Create User</butto>
    </div>
  );
}
