import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch('http://localhost:5000/login', {
        method: "post",
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": "application/json",
          }
    })
    result = await result.json();
    console.log(result)
  }
  return (
    <div className="login">
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="inputBox"
        placeholder="Enter Password"
        value={password}
      />
      <button onClick = {handleLogin} className="button" type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
