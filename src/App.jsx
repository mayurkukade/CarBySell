import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import { LoginCard } from "./pages/LoginCard";
import { SimpleRegistrationForm } from "./pages/SimpleRegistrationForm";

import BuyCar from "./pages/BuyCar";

export default function App() {
  return (
    <Routes>
      <Route path="signin" element={<LoginCard />} />
      <Route path="signup" element={<SimpleRegistrationForm />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carlist" element={<BuyCar/>} />
      </Route>
    </Routes>
  );
}
