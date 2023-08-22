import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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
        <form className="grid col-start-4 col-end-10 bg-green-500 drop-shadow-lg text-xl text-left p-5 rounded-lg min-h-fit">
          <h2 className="text-4xl text-center">Login</h2>
          <fieldset className="pb-5">
            <label>
              <p>Email</p>
              <input
                type="text"
                name="email"
                className="w-full"
                placeholder="example@email.com"
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
