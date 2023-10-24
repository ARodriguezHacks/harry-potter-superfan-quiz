import { useState, ChangeEvent, FormEvent } from "react";
import "../App.css";

const userValues = {
  email: "",
  password: "",
};

type LoginProps = {
  login: boolean;
  changeView: () => undefined;
};

export default function Login(props: LoginProps) {
  const [values, setValues] = useState(userValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form
        className="grid col-start-4 col-end-10 bg-green-500 drop-shadow-lg text-xl text-left p-5 rounded-lg min-h-fit"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl text-center">Login</h2>
        <fieldset className="pb-5">
          <label>
            <p>Email</p>
            <input
              type="text"
              name="email"
              className="w-full"
              placeholder="example@email.com"
              value={values.email}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset className="pb-5">
          <label>
            <p>Password</p>
            <input
              type="password"
              name="password"
              className="w-full"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button className="rounded-full bg-orange-500" type="submit">
          Submit
        </button>
      </form>
      <div className="grid col-start-4 col-end-10 bg-pink-500 drop-shadow-lg text-xl text-left p-5 rounded-lg min-h-fit">
        <p>
          Don't have an account? Click{" "}
          <button onClick={props.changeView}>
            <u>here</u>
          </button>{" "}
          to sign up.
        </p>
      </div>
    </>
  );
}
