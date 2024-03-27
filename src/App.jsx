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
import AddDealerCar from "./pages/dealer/AddDealerCar";
import EditCar from "./pages/dealer/EditCar";
import BiddingAddCar from "./pages/bidding/BiddingAddCar";
import BiddingEditCar from "./pages/bidding/BiddingEditCar";
import SetTimer from "./pages/bidding/SetTimer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import AppLayout2 from "./ui/AppLayout2";

export default function App() {
  return (
    <>
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
            <Route path="/dealer/:id/addcar" element={<AddDealerCar />} />
            <Route path="/dealer/:id/editcar" element={<EditCar />} />
          </Route>

          <Route path="/bidding" element={<BiddingMainPage />} />
          <Route path="/bidding/:id/addcar" element={<BiddingAddCar />} />
          <Route path="/bidding/:id/editcar" element={<BiddingEditCar />} />
          <Route path="/bidding/:id/:carid/settimer" element={<SetTimer />} />
        </Route>

        <Route element={<AppLayout2 />}>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/cookiepolicy" element={<CookiePolicy />} />
        </Route>

      </Routes>
    </>
  );
}
