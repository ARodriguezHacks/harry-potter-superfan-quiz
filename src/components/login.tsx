import { useState, ChangeEvent, FormEvent } from "react";
// import bcrypt from "bcrypt";
// import argon2 from "argon2";
import "../App.css";

const defaultValues = {
  email: "",
  password: "",
};

type LoginProps = {
  login: boolean;
  changeView: () => undefined;
};

export default function Login(props: LoginProps) {
  const [values, setValues] = useState(defaultValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // hash the password before sending to response
    // bcrypt.hash(values.password, 8, function (err, hash) {
    //   console.log(hash);
    // });
    // try {
    //   const hash = await argon2.hash("password");
    //   console.log(hash);
    // } catch (err) {
    //   console.log(err);
    // }
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(values),
    });

    const output = await response.json();
    console.log(output);
    return output;
    //   bcrypt.hash(values.password, 8, function(err, hash) {
    //     // Store hash in your password DB.
    // });
    // setValues({
    //   email: "",
    //   password: "",
    // });
  };

  // useEffect()

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
