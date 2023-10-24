import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  const [login, setLogin] = useState(true);

  const changeForm = (): undefined => {
    setLogin(!login);
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
        {login ? (
          <Login changeView={changeForm} login />
        ) : (
          <SignUp changeView={changeForm} />
        )}
      </main>
    </>
  );
}

export default App;
