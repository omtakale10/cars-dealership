import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Sign Up</h2>

      <input placeholder="Username" /><br/><br/>
      <input placeholder="First Name" /><br/><br/>
      <input placeholder="Last Name" /><br/><br/>
      <input placeholder="Email" /><br/><br/>
      <input type="password" placeholder="Password" /><br/><br/>

      <button>Register</button>
    </div>
  );
}

export default Register;