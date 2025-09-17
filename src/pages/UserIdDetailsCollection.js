import React, { useState } from "react";
import { useLocation } from "react-router-dom";  // ✅ import
import logo2 from "../assets/logo2.png";
import state from "../assets/statenames.json";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UserIDetailsCollection() {
  const navigate = useNavigate()
  const location = useLocation(); // ✅ get data passed via navigate
  const { signed_up_number, country_code } = location.state || {};

  const [companyName, setCompanyName] = useState("");
  const [isError, setIsError] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [state_name, setStateName] = useState("");
  const [submitButton, setSubmitButton] = useState(false);
  const [message, setMessage] = useState("");

  const states = state.map((s) => ({
    iso: s.iso_code,
    code: s.gst_state_code,
    name: s.name,
  }));

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setMobileNumber(value);
    }
  };

  const verify_data = async () => {
    const fullMobile = country_code + mobileNumber;
    setSubmitButton(true);
    setSubmitButton(true);
    try {
      const response = await fetch("https://beam-i3b3.onrender.com/verifyUserInfo/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          mobile: signed_up_number,   // ✅ from signup
          check_mobile: fullMobile,   // ✅ entered again here
          name: companyName,
          pin: password,
          state: state_name,
          action: "verify_user_details",
        }),
      });

      const data = await response.json();
      setTimeout(() => {
        if (data.success) {
          localStorage.setItem("isAuthenticatedUserIDetailsCollection", "true");
          navigate("/home", { state: { user_name: companyName, user_password: password, stateName: state_name } });
          setIsError(false);
          setMessage("User verified successfully ✅");
        } else {
          setIsError(true);
          setMessage(data.message);
        }
        setSubmitButton(false);
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        if (error.message.includes("Failed to fetch")) {
          setMessage("Network error! Please check your internet connection.")
        }
        else {
          setMessage("Error: " + error.message);
        }
        setIsError(true);
        setSubmitButton(false);

      }, 2000);
    }
  };

  if (!signed_up_number || !country_code) {
    return <Navigate to="/signup" replace />;
  }

  return (
    <main className="UserIDetailsCollection-main">
      <head>
        <title>𝐁𝐄𝐀𝐌-𝐔𝐬𝐞𝐫𝐈𝐝𝐃𝐞𝐭𝐚𝐢𝐥𝐬𝐂𝐨𝐥𝐥𝐞𝐜𝐭𝐢𝐨𝐧</title>
      </head>
      <div className="UserIDetailsCollection-sub">
        <div id="UserIDetailsCollection-centre-logo">
          <img src={logo2} className="UserIDetailsCollection-logo" alt="Logo" />
        </div>

        <div className="UserIDetailsCollection-content">
          <h2>Sign Up</h2>
          <h3>Set up your details for login purposes</h3>
        </div>

        <div className="UserIDetailsCollection-data-collection">
          <input
            type="number"
            placeholder="Enter Mobile Number"
            className="UserIDetailsCollection-mobile-number"
            value={mobileNumber}
            onChange={handleNumberChange}
          />

          <input
            type="text"
            placeholder="Enter Company Name"
            className="UserIDetailsCollection-username"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
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
            className="UserIDetailsCollection-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="UserIDetailsCollection-submit">
          <button onClick={verify_data} disabled={submitButton}>
            {submitButton ? "Loading..." : "Submit"}
          </button>
        </div>

        {message && (
          <p className={isError ? "msg-error" : "msg-success"}>{message}</p>
        )}
      </div>
    </main>
  );
}
