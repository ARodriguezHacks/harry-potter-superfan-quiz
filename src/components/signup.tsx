import { useState, ChangeEvent, FormEvent, FocusEvent } from "react";
import "../App.css";

type UserObject = {
  email: string;
  password: string;
  passwordVerify: string;
};

const userValues: UserObject = {
  email: "",
  password: "",
  passwordVerify: "",
};

type SignUpProps = {
  readonly changeView: () => undefined;
};

export default function SignUp(props: SignUpProps) {
  const [values, setValues] = useState(userValues);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    passwordVerify: false,
  });
  const [regExCheck, setregExCheck] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({email: values.email, password: values.password}),
    });

    const output = await response.json();
    console.log(output)
    setValues(userValues)
    return output;
  };

  const handlePasswordCheck = (e: FocusEvent<HTMLInputElement>) => {
    if (values.password !== values.passwordVerify) {
      setErrors({ ...errors, [e.target.name]: true });
      setDisabled(true);
    }
  };

  const handleInputCheck = (e: FocusEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.target.value === "") {
      setErrors({ ...errors, [e.target.name]: true });
      setDisabled(true);
    } else {
      setErrors({ ...errors, [e.target.name]: false });
    }

    if (e.target.name === "password" && e.target.value !== "") {
      const regExp = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g
      );
      if (regExp.test(e.target.value)) {
        setregExCheck(false);
      } else {
        setregExCheck(true);
      }
    }
  };

  return (
    <>
      <form
        className="grid col-start-4 col-end-10 bg-green-500 drop-shadow-lg text-xl text-left p-5 rounded-lg min-h-fit"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl text-center">Create Account</h2>
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
              onBlur={handleInputCheck}
              required
            />
          </label>
          {errors.email ? <small>Email field is required</small> : null}
        </fieldset>
        <fieldset className="pb-5">
          <label>
            <p>Password</p>
            <input
              type="password"
              name="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              className="w-full"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleInputCheck}
              required
            />
          </label>
          {errors.password ? <small>Password field is required</small> : null}
          {regExCheck ? <small>Password needs fixing.</small> : null}
        </fieldset>
        <fieldset className="pb-5">
          <label>
            <p>Verify Password</p>
            <input
              type="password"
              name="passwordVerify"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              className="w-full"
              placeholder="Re-type Password"
              value={values.passwordVerify}
              onChange={handleChange}
              onBlur={handlePasswordCheck}
              required
            />
          </label>
          {/* { errors ? <small>Email field is required</small>: null} */}
        </fieldset>
        <button
          className="rounded-full bg-orange-500"
          type="submit"
          disabled={disabled}
        >
          Submit
        </button>
      </form>
      <div className="grid col-start-4 col-end-10 bg-pink-500 drop-shadow-lg text-xl text-left p-5 rounded-lg min-h-fit">
        <p>
          Already have an account? Click{" "}
          <button onClick={props.changeView}>
            <u>here</u>
          </button>{" "}
          to login.
        </p>
      </div>
    </>
  );
}
