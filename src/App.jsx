import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import { LoginCard } from "./pages/LoginCard";
import { SimpleRegistrationForm } from "./pages/SimpleRegistrationForm";

import BuyCar from "./pages/BuyCar";
import CarDetailsById from "./pages/CarDetailsById";
import AboutUs from "./pages/AboutUs";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="signin" element={<LoginCard />} />
      <Route path="signup" element={<SimpleRegistrationForm />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/carlist" element={<BuyCar />} />
        <Route path="/carlist/cardetails/:carId" element={<CarDetailsById />} />
      </Route>
    </Routes>
    {/* <AboutUs/> */}
    {/* <CookiePolicy/> */}
    {/* <PrivacyPolicy/> */}
    {/* <ContactUs/> */}
    </>
  );
}
