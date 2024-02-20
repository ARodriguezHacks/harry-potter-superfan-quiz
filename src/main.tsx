import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Homepage from "./pages/homepage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import QuizLevel from "./pages/quizLevel.tsx";
import Dashboard from "./pages/dashboard.tsx";

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
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
