import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import { LoginCard } from "./pages/LoginCard";
import { SimpleRegistrationForm } from "./pages/SimpleRegistrationForm";

import BuyCar from "./pages/BuyCar";
import CarDetailsById from "./pages/CarDetailsById";
import Admin from "./pages/adminpages/Admin";
import AdminMiddleware from "./middleware/AdminMiddleware";
import { onlyAdmin, onlyDealer } from "./components/config/Roles";
import AdminDealerInfo from "./pages/adminpages/AdminDealerInfo";
import AdminDealerEdit from "./pages/adminpages/AdminDealerEdit";
import DealerDashboard from "./pages/dealer/DealerDashboard";
import DealerMiddleware from "./middleware/DealerMiddleware";
import BiddingMainPage from "./pages/bidding/BiddingMainPage";
import EditDealerCar from "./pages/dealer/EditDealerCar";

export default function App() {
  return (
    <Routes>
      <Route path="signin" element={<LoginCard />} />
      <Route path="signup" element={<SimpleRegistrationForm />} />
      <Route path="/" element={<Home />} />
      <Route element={<AppLayout />}>
        <Route path="/carlist" element={<BuyCar />} />
        <Route path="/carlist/cardetails/:carId" element={<CarDetailsById />} />
        <Route
          element={
            <AdminMiddleware allowedRoles={[...Object.values(onlyAdmin)]} />
          }
        >
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dealer/info/:id" element={<AdminDealerInfo />} />
          <Route
            path="/admin/dealer/edit/:userid/:id"
            element={<AdminDealerEdit />}
          />
        </Route>

        <Route
          element={
            <DealerMiddleware allowedRoles={[...Object.values(onlyDealer)]} />
          }
        >
          <Route path="/dealer/:id" element={<DealerDashboard />} />
          <Route path="/dealer/:id/car/edit/:carId" element={<EditDealerCar />} />
        </Route>

        <Route path="/bidding" element={<BiddingMainPage />} />
      </Route>
    </Routes>
  );
}
