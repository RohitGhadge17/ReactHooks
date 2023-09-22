import React, { useRef, useState } from "react";

const FormTutorial = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null)

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email : " + email + " Password : " + password);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
            ref={emailRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            ref={passwordRef}
          />
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default FormTutorial;
