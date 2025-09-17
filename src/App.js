import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Firm from "./pages/Firm";
import About from "./pages/About";
import Terms from "./pages/Terms&Conditions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserIDetailsCollection from "./pages/UserIdDetailsCollection";
import PrivateRouteSignup from "./components/PrivateRouteSignup";
import PrivateRouteUserIdDetailsCombined from "./components/PrivateRouteUserIdDetails_combined";
import HomeBEAM from "./BEAM_pages/Home";
import Test from "./pages/test";
import BeamNavbar from "./BEAM_pages/BeamNavbar";
import Available from "./BEAM_pages/Available";
import Achieved from "./BEAM_pages/Achieved";
import Feedbacks from "./BEAM_pages/Feedbacks";
import HomeContent from "./BEAM_pages/Content";
import Profile from "./BEAM_pages/Profile";
import Dashboard from "./BEAM_pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Layout for BEAM routes
function BeamLayout() {
  return (
    <>
      <BeamNavbar />
      <Outlet /> {/* Nested BEAM pages will render here */}
    </>
  );
}

function Layout() {
  const location = useLocation();

  // Hide default Navbar/Footer on these routes
  const hideLayout = location.pathname.startsWith("/home") || location.pathname === "/test";

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/firm" element={<Firm />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms&conditions" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected signup flow */}
        <Route
          path="/userIdDetailsCollection"
          element={
            <PrivateRouteSignup>
              <UserIDetailsCollection />
            </PrivateRouteSignup>
          }
        />

        {/* BEAM Protected Routes */}
        <Route
          path="/home"
          element={
            <PrivateRouteUserIdDetailsCombined>
              <BeamLayout />
            </PrivateRouteUserIdDetailsCombined>
          }
        >
          <Route index element={<HomeBEAM />} /> {/* /home */}
          <Route path="Content" element={<HomeContent />} />
          <Route path="available" element={<Available />} /> {/* /home/available */}
          <Route path="achieved" element={<Achieved />} />   {/* /home/achieved */}
          <Route path="feedbacks" element={<Feedbacks />} /> {/* /home/feedbacks */}
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* Test page */}
        <Route path="/test" element={<Test />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
