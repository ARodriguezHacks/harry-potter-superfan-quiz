import { useState, ChangeEvent, FormEvent, FocusEvent } from "react";
import "../App.css";

type UserObject = {
  email: string,
  password: string,
  passwordVerify: string
}

const userValues:UserObject = {
  email: "",
  password: "",
  passwordVerify: "",
};

type SignUpProps = {
  readonly changeView: () => undefined;
};

export default function SignUp(props: SignUpProps) {
  const [values, setValues] = useState(userValues);
  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
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
      passwordVerify: "",
    });
  };

  const handlePasswordCheck = (e: FocusEvent<HTMLInputElement>) => {
    // e.preventDefault();
    console.log(e);
    if (values.password !== values.passwordVerify) {
      setErrors(true)
      setDisabled(true)
    }
  };

  const handleInputCheck = (e: FocusEvent<HTMLFormElement>) => {
    console.log(e);
    let value: keyof typeof values;  // Type is "one" | "two" | "three"
    for (value in values){
      // console.log(`${values[value]}`)
      if (values[value] === "") {
        setErrors(true)
        setDisabled(true)
      }
    }
  }

  return (
    <>
      <form
        className="grid col-start-4 col-end-10 bg-green-500 drop-shadow-lg text-xl text-left p-5 rounded-lg min-h-fit"
        onSubmit={handleSubmit}
        onBlur={handleInputCheck}
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
              required
            />
          </label>
          { errors ? <small>Email field is required</small>: null}
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
        <fieldset className="pb-5">
          <label>
            <p>Verify Password</p>
            <input
              type="password"
              name="passwordVerify"
              className="w-full"
              placeholder="Re-type Password"
              value={values.passwordVerify}
              onChange={handleChange}
              onBlur={handlePasswordCheck}
            />
          </label>
        </fieldset>
        <button className="rounded-full bg-orange-500" type="submit" disabled={disabled}>
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
