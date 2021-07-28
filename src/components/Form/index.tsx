import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginUserFetch, selectError } from "state/user";

type Echange = React.ChangeEvent<HTMLInputElement>;
type Esubmit = React.FormEvent<HTMLFormElement>;

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const errorMessage = useSelector(selectError);
  const dispatch = useDispatch();

  const handleSubmit = (e: Esubmit) => {
    e.preventDefault();
    dispatch(loginUserFetch({ Username: name, Password: password }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4 className="form__header">Log In</h4>
      <label htmlFor="name">User name</label>
      <input
        className="form__input"
        type="text"
        id="name"
        placeholder="user name"
        value={name}
        onChange={(e: Echange) => setName(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        className="form__input"
        type="text"
        id="password"
        placeholder="password"
        value={password}
        onChange={(e: Echange) => setPassword(e.target.value)}
      />

      <div className="form__error">{errorMessage}</div>

      <button className="form__btn">Log In</button>
    </form>
  );
};

export default Form;
