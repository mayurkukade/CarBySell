import {
  Checkbox,
  Button,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Inputs from "../forms/Inputs";
import CardUi from "../ui/CardUi";
import { useState } from "react";

export function SimpleRegistrationForm() {
  const [formStateData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
    city: "",
    area: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    console.log(formStateData);
  };

  console.log(formStateData)

  return (
    <div className="h-auto mt-10 flex justify-center items-center">
      <CardUi color="transparent" shadow={false}>
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>

        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6 w-100">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              First Name
            </Typography>
            <Inputs
              label={"Enter your first name"}
              name="firstName"
              value={formStateData.firstName}
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Last Name
            </Typography>
            <Inputs
              label={"Enter your last name"}
              name="lastName"
              value={formStateData.lastName}
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Inputs
              label={"Email"}
              type={"email"}
              name="email"
              value={formStateData.email}
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Mobile Number
            </Typography>
            <Inputs
              label={"Mobile Number"}
              name="mobileNumber"
              value={formStateData.mobileNumber}
              onChange={handleChange}
              type={"number"}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Address
            </Typography>
            <Inputs
              label={"Address"}
              name="address"
              value={formStateData.address}
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              City
            </Typography>
            <Inputs
              label={"City"}
              name="city"
              value={formStateData.city}
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Area
            </Typography>
            <Inputs
              label={"Area"}
              name="area"
              value={formStateData.area}
              onChange={handleChange}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree to the
                <Link
                  to="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </Link>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            name="agreeTerms"
            checked={formStateData.agreeTerms}
            onChange={handleChange}
          />
          <Button className="mt-6" fullWidth type="submit">
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </CardUi>
    </div>
  );
}
