import React from "react";
import App from "./App";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import ManageUser from "./components/Admin/Content/ManageUser";
import DashBoard from "./components/Admin/Content/DashBoard";
import { Login } from "./components/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Auth/Register";
import { ListQuiz } from "./components/User/ListQuiz";
import { DetailQuiz } from "./components/User/DetailQuiz";
import { ManageQuiz } from "./components/Admin/Content/Quiz/ManageQuiz";
import { Questions } from "./components/Admin/Content/Question/Questions";
import { PrivateRoute } from "./routes/PrivateRoute";
import { Suspense } from "react";

export const Layout = (props) => {
  const NotFound = () => {
    return (
      <div className="container mt-3 alert alert-danger ">
        404.Page not found
      </div>
    );
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="users"
            element={
              <PrivateRoute>
                <ListQuiz />
              </PrivateRoute>
            }
          ></Route>
        </Route>
        <Route path="quiz/:id" element={<DetailQuiz />}></Route>

        <Route
          path="/admins"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        >
          <Route index element={<DashBoard />}></Route>
          <Route path="manage-users" element={<ManageUser />}></Route>
          <Route path="manage-quizzes" element={<ManageQuiz />}></Route>
          <Route path="manage-questions" element={<Questions />}></Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<PrivateRoute />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Suspense>
  );
};
