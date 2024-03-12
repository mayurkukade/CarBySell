import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useSignInMutation } from "../services/authAPI";
import { setToken } from "../features/authSlice";

import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

export function LoginCard() {
  const [formStateData, setFormStateData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [signIn] = useSignInMutation();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormStateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formStateData);
    try {
      const { data } = await signIn(formStateData);
      console.log(data);
      if (data) {
        console.log(data);
        const jwtDecodes = jwtDecode(data);
        const jwtDecodesJson = JSON.stringify(jwtDecodes) 
localStorage.setItem('userInfo',jwtDecodesJson)
        console.log(jwtDecodes);
        dispatch(setToken(data));
        
        navigate("/");
      } else {
        alert("email and password is not match");
      }

      // Handle successful sign-in, such as redirecting to a different page
    } catch (error) {
      console.log(error);
      // Handle sign-in error
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email"
              name="username"
              type="email"
              value={formStateData.username}
              onChange={handleChange}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={formStateData.password}
              onChange={handleChange}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type="submit">
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?{" "}
              <Link to="/signup">
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
