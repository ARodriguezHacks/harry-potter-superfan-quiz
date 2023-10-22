import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const userValues = {
  email: "",
  password: "",
};

function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // In Order to apply DRY principles, decided to use an Object for initial values in order to use the same handleChange function for the onChange event handler.
  const [values, setValues] = useState(userValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(typeof e);
    console.log(e);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link
              to="/homepage"
              className="bg-violet-500 hover:bg-violet-600 rounded-full p-2"
            >
              Homepage
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Harry Potter Superfan Quiz</h1>
      <main className="grid grid-cols-12 w-full">
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
      </main>
    </>
  );
}

export default App;
