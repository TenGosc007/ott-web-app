import React from "react";

const Form = () => {
  return (
    <form className="form">
      <h4 className="form__header">Log In</h4>
      <label htmlFor="name">User name</label>
      <input
        className="form__input"
        type="text"
        id="name"
        placeholder="user name"
      />

      <label htmlFor="password">Password</label>
      <input
        className="form__input"
        type="text"
        id="password"
        placeholder="password"
      />

      <button className="form__btn">Log In</button>
    </form>
  );
};

export default Form;
