import React, { useState } from "react";
import logo2 from "../assets/logo2.png";
import countryData from "../assets/countrycodes.json";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(""); // ✅ OTP state
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(true);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // ✅ track OTP sent
  const navigate = useNavigate();

  const countries = countryData.map((c) => ({
    iso: c.iso,
    code: `+${c.code}`,
    name: c.country,
  }));

  const getFlagEmoji = (iso) =>
    iso
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt())
      );

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setMobileNumber(value);
    }
  };

  // ✅ Send OTP
  const sendOtp = async () => {
    const fullMobile = countryCode + mobileNumber;
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://beam-i3b3.onrender.com/otp/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ mobile: fullMobile, action: "send_otp" }),
      });

      const data = await response.json();

      setTimeout(() => {
        setLoading(false);
        setMessage(data.message);

        if (data.message && data.message.toLowerCase().includes("otp")) {
          setIsError(false);
          setOtpSent(true);
        }
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
        setIsError(true);
        if (error.message.includes("Failed to fetch")) {
          setMessage("Network error! Please check your internet connection.")
        }
        else {
          setMessage("Error: " + error.message);
        }
      }, 2000);
    }
  };

  // ✅ Verify OTP
  const verifyOtp = async () => {
    const fullMobile = countryCode + mobileNumber;
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://beam-i3b3.onrender.com/otp/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          mobile: fullMobile,
          action: "verify_otp",
          otp: otp,
        }),
      });

      const data = await response.json();

      setTimeout(() => {
        setLoading(false);
        if (
          data.message &&
          data.message.toLowerCase().includes("otp verified successfully!")
        ) {
          localStorage.setItem("isAuthenticatedSignUp", "true");

          // ✅ pass props via navigate
          navigate("/UserIdDetailsCollection", {
            state: { signed_up_number: fullMobile, country_code: countryCode },
          });
        } else {
          setMessage(data.message);
        }
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        if (error.message === "Failed to fetch") {
          setMessage("Network error! Please check your internet connection.")
        }
        else {
          setMessage("Error verifying OTP: " + error.message);
        }
        setLoading(false);

      }, 2000);
    }
  };

  return (
    <main className="signup-main">
      <head>
        <title>𝐁𝐄𝐀𝐌-𝐒𝐢𝐠𝐧𝐔𝐩</title>
      </head>
      <div className="signup-sub-main">
        <div id="signup-centre-logo">
          <img src={logo2} className="signup-logo" alt="Logo" />
        </div>

        <div className="signup-content">
          <h2>Sign Up</h2>
          <h3>Create New Account</h3>
        </div>

        {/* Phone number */}
        <div id="input-collection">
          <div className="sign-up-mobile-number">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              disabled={otpSent}
            >
              {countries.map((country) => (
                <option key={country.iso} value={country.code}>
                  {getFlagEmoji(country.iso)} ({country.code})
                </option>
              ))}
            </select>

            <div className="phone-input">
              <input
                type="number"
                placeholder="Enter Mobile number"
                value={mobileNumber}
                onChange={handleNumberChange}
                disabled={otpSent}
              />
            </div>
          </div>
        </div>

        {/* OTP input */}
        <div
          className={`otp-wrapper ${otpSent ? "expand" : ""}`}
          style={{
            maxHeight: otpSent ? "80px" : "0",
            overflow: "hidden",
            transition: "max-height 0.5s ease",
          }}
        >
          {otpSent && (
            <div className="otp-input" style={{ marginTop: "10px" }}>
              <input
                type="number"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Button */}
        <div className="send-otp">
          <button onClick={otpSent ? verifyOtp : sendOtp} disabled={loading}>
            {loading
              ? otpSent
                ? "Verifying..."
                : "Sending..."
              : otpSent
                ? "Verify OTP"
                : "Send OTP"}
          </button>
        </div>
        <div className="signup-account">
          <a href="/login">
            <p>Already have an account?</p>
          </a>
        </div>
        {loading && <div className="loader"></div>}

        {!loading && message && (
          <p className={isError ? "msg-error" : "msg-success"}>{message}</p>
        )}
      </div>
    </main>
  );
}
