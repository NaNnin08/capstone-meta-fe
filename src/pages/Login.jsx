import React, { useState } from "react";

// image
import LogoImage from "../assets/icons_assets/Logo.svg";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useNavigate, useSearchParams } from "react-router-dom";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const [searcParams] = useSearchParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: isLogin
      ? {
          email: "",
          password: "",
        }
      : {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
    onSubmit: (values) => {
      const refrensi = searcParams.get("red");
      sessionStorage.setItem("_user", JSON.stringify(values));

      if (refrensi) {
        navigate(`/${refrensi}`);
      } else {
        navigate("/");
      }
    },
    validationSchema: isLogin
      ? Yup.object({
          email: Yup.string().email().required("Required"),
          password: Yup.string().required("Required"),
        })
      : Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().email().required("Required"),
          password: Yup.string().required("Required"),
          confirmPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password")], "Passwords must match"),
        }),
  });

  // func
  const onLogin = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div className="login">
      <div className={`login-container ${!isLogin ? "signup" : ""}`}>
        <div className="login-form">
          <h1>{isLogin ? "Login Now" : "Signup Now"}</h1>
          <form className="form_login" onSubmit={onLogin}>
            {isLogin ? (
              <>
                <div className="input" key="login">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    className={`${formik.errors.email ? "error" : ""}`}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.errors.email ? (
                    <p className="error-p">{formik.errors.email}</p>
                  ) : null}
                </div>
                <div className="input">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className={`${formik.errors.password ? "error" : ""}`}
                    {...formik.getFieldProps("password")}
                  />
                  {formik.errors.password ? (
                    <p className="error-p">{formik.errors.password}</p>
                  ) : null}
                </div>
              </>
            ) : (
              <>
                <div className="input" key="signup">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`${formik.errors.name ? "error" : ""}`}
                    {...formik.getFieldProps("name")}
                  />
                  {formik.errors.name ? (
                    <p className="error-p">{formik.errors.name}</p>
                  ) : null}
                </div>
                <div className="input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    className={`${formik.errors.email ? "error" : ""}`}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.errors.email ? (
                    <p className="error-p">{formik.errors.email}</p>
                  ) : null}
                </div>
                <div className="input">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className={`${formik.errors.password ? "error" : ""}`}
                    {...formik.getFieldProps("password")}
                  />
                  {formik.errors.password ? (
                    <p className="error-p">{formik.errors.password}</p>
                  ) : null}
                </div>
                <div className="input">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm-password"
                    className={`${
                      formik.errors.confirmPassword ? "error" : ""
                    }`}
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  {formik.errors.confirmPassword ? (
                    <p className="error-p">{formik.errors.confirmPassword}</p>
                  ) : null}
                </div>
              </>
            )}

            <input type="submit" value="Login" />
          </form>
          <p className="login-change" onClick={toggleForm}>
            {isLogin
              ? "Don't have an account? Signup"
              : "Already have an account? Login"}
          </p>
        </div>
        <div className="login-image">
          <img src={LogoImage} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
