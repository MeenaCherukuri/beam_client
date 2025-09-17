import React from "react";
import logo2 from "../assets/logo2.png";
import { useState } from "react";
import state from "../assets/statenames.json";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [isError, setIsError] = useState(false);
  const [password, setPassword] = useState("");
  const [state_name, setStateName] = useState("");
  const [submitButton, setSubmitButton] = useState(false);
  const [message, setMessage] = useState("");

  const states = state.map((s) => ({
    iso: s.iso_code,
    code: s.gst_state_code,
    name: s.name,
  }));

  const verify_data = async () => {
    setSubmitButton(true); // show loading
    try {
      const response = await fetch("https://beam-i3b3.onrender.com/verifyUserInfo_login/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: userName,
          pin: password,
          state: state_name,
          action: "verify_user_details_login",
        }),
      });

      const data = await response.json();
      setTimeout(() => {
        if (data.success) {
          localStorage.setItem("isAuthenticatedUser_login", "true");
          navigate("/home", { state: { user_name: userName, user_password: password, stateName: state_name } });
          setIsError(false);
          setMessage("User verified successfully ✅");
        } else {
          setIsError(true);
          setMessage(data.message);
        }
        setSubmitButton(false); // reset loading
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        setIsError(true);
        if (error.message.includes("Failed to fetch")) {
          setMessage("Network error! Please check your internet connection.")
        }
        else {
          setMessage("Error: " + error.message);
        }
        setMessage("Error: " + error.message);setSubmitButton(false); // reset loading on error
      }, 2000);
    }
  };

  return (
    <main className="login-main">
      <head>
        <title>𝐁𝐄𝐀𝐌-𝐋𝐨𝐠𝐢𝐧</title>
      </head>
      <div className="login-sub">
        <div id="login-centre-logo">
          <img src={logo2} className="login-logo" alt="Logo" />
        </div>

        <div className="login-content">
          <h2>Login</h2>
          <h3>Log in to your existing profile</h3>
        </div>

        <div className="login-data-collection">
          <input
            type="text"
            placeholder="Enter Company Name"
            className="login-username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <select
            value={state_name}
            onChange={(e) => setStateName(e.target.value)}
            disabled={submitButton}
          >
            <option value="">Select State</option>
            {states.map((s) => (
              <option key={s.iso} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>

          <input
            type="password"
            placeholder="Enter password"
            className="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-submit">
          <button onClick={verify_data} disabled={submitButton}>
            {submitButton ? "Loading..." : "Login"}
          </button>
        </div>
         <div className="login-account">
          <a href="/signup">
            <p>New to BEAM?</p>
            </a>
        </div>
        {message && (
          <p className={isError ? "msg-error" : "msg-success"}>{message}</p>
        )}
      </div>
    </main>
  );
}
