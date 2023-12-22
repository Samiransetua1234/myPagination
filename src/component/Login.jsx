import React, { useRef, useState } from "react";
import reactLogo from "../assets/react.svg";
import Log from "./Log";
import Otp from "./Otp";
import Setpass from "./Setpass";
import Signup from "./Signup";
import Test from "./Test";

const Login = () => {
  const [showLogin, setShowLogin] = useState("Login");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  ///otp
  // const {setShowLogin, email} = props.data
  const [In1, setIn1] = useState("");
  const [In2, setIn2] = useState("");
  const [In3, setIn3] = useState("");
  const [In4, setIn4] = useState("");

  const inRef1 = useRef(null);
  const inRef2 = useRef(null);
  const inRef3 = useRef(null);
  const inRef4 = useRef(null);

  const handleInputChange = (e, setInput, nextInRef, prevInRef) => {
    const inputValue = e.target.value;

    setInput(inputValue);

    if (inputValue.length === 1 && nextInRef.current) {
      nextInRef.current.focus();
    }
    if (inputValue.length === 0 && prevInRef.current) {
      prevInRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLogin("Setpass");
  };
  ////

  let content;
  switch (showLogin) {
    case "Login":
      content = (
        <Log
          data={{
            setShowLogin,
            email,
            setEmail,
            emailRegex,
            passwordRegex,
            isEmailValid,
            isPassValid,
            setIsEmailValid,
            setIsPassValid,
          }}
        />
      );
      break;
    case "Signup":
      content = (
        <Signup
          data={{
            setShowLogin,
            email,
            setEmail,
            emailRegex,
            isEmailValid,
            setIsEmailValid,
          }}
        />
      );
      break;
    case "OTP":
      content = <Otp data={{ setShowLogin, email }} />;
      break;
    case "Setpass":
      content = (
        <Setpass
          data={{ setShowLogin, isPassValid, setIsPassValid, passwordRegex }}
        />
      );
      break;
    default:
      content = <Log data={{ setShowLogin, email, setEmail }} />;
      break;
  }
  return (
    <section className="">
      <main className="h-screen w-screen flex flex-wrap bg-yellow-300">
        <div className="h-[12vh] w-full md:h-full md:w-1/2 md:bg-gradient-to-t from-black to-transparent flex flex-col justify-between text-white md:p-10 text-center ">
          <div>
            <img src={reactLogo} className="p-2" alt="logo" />
          </div>
          <div className=" flex flex-col text-center invisible md:visible">
            <h1 className="text-2xl">Title Lorem, ipsum dolor.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              delectus.
            </p>
          </div>
        </div>
        <div className="flex h-[88vh] w-full p-2 md:h-full md:w-1/2 bg-gradient-to-b from-white via-white to-transparent items-center justify-center">
          {content}
          {/* <Test data = {{setShowLogin, email, setEmail, emailRegex, passwordRegex, isEmailValid, isPassValid, setIsEmailValid, setIsPassValid}}/> */}
        </div>
      </main>
    </section>
  );
};

export default Login;
