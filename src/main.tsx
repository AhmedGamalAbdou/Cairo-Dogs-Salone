import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Root from "./Root";
import Booking from "./pages/Booking";
import { AuthContext } from "./Context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      {
        path: "booking",
        element: (
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthContext>
  </React.StrictMode>
);
