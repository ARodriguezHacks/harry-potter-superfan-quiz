import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Homepage from "./pages/homepage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import QuizLevel from "./pages/quizLevel.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/quizLevel",
    element: <QuizLevel />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
