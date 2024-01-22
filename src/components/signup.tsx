import { useState, ChangeEvent, FormEvent, FocusEvent } from "react";
import "../App.css";

interface UserObject {
  email: string;
  password: string;
  passwordVerify: string;
}

const initialValues: UserObject = {
  email: "",
  password: "",
  passwordVerify: "",
};

type SignUpProps = {
  readonly changeView: () => undefined;
};

export default function SignUp(props: SignUpProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    passwordVerify: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit =  async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(values))
    const response = await fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(values),
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });

    const output = await response.json();
    console.log(output)
    setValues(initialValues)
    return output;
  };

  const handleInputCheck = (e: FocusEvent<HTMLInputElement>) => {
    type ObjectKey = UserObject[keyof UserObject];
    const targetKey: ObjectKey = e.target.name;

    if (values[`${targetKey}` as keyof UserObject] === "") {
      setErrors({
        ...errors,
        [targetKey]: true,
      });
    } else if (targetKey === "password") {
      const regex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g
      );
      if (!regex.test(e.target.value)) {
        setErrors({
          ...errors,
          [targetKey]: true,
        });
      } else {
        setErrors({
          ...errors,
          [targetKey]: false,
        });
      }
    } else if (targetKey === "passwordVerify") {
      if (values.passwordVerify !== values.password) {
        setErrors({
          ...errors,
          [targetKey]: true,
        });
      } else {
        setErrors({
          ...errors,
          [targetKey]: false,
        });
      }
    } else {
      setErrors({
        ...errors,
        [targetKey]: false,
      });
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
          {errors.password && !values.password ? (
            <small>Password field is required</small>
          ) : null}
          {errors.password && values.password ? (
            <small>Password needs fixing.</small>
          ) : null}
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
              onBlur={handleInputCheck}
              required
            />
          </label>
          {errors.passwordVerify ? (
            <small>Passwords do not match. Please fix.</small>
          ) : null}
        </fieldset>
        <button
          className={`rounded-full ${
            Object.values(values).includes("") ||
            Object.values(errors).includes(true)
              ? "bg-orange-200"
              : "bg-orange-500"
          }`}
          type="submit"
          disabled={
            Object.values(values).includes("") ||
            Object.values(errors).includes(true)
          }
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
