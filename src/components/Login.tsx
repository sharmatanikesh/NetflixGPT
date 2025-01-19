import { SubmitHandler, useForm } from "react-hook-form";
import Header from "./Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormValue, signInSchema } from "../utils/types";
import { useState } from "react";
function Login() {
  const [toggleSignIn, setToggleSignIn] = useState<boolean>(true);

  const handleToggleSignIn = () => {
    setToggleSignIn(!toggleSignIn);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValue>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn: SubmitHandler<SignInFormValue> = (data) => {
    console.log(data);
  };
  return (
    <div className="relative">
      <Header />
      <div className="relative -z-10 bg-gradient-to-b from-current to-black/100">
        <img
          className=" absolute filter brightness-50 object-cover w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg"
          alt="background image"
        />
      </div>

      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="w-[450px] absolute p-12 my-36 bg-black mx-auto left-0 right-0  text-white  bg-opacity-70  rounded-md "
      >
        <h1 className="font-bold py-4 text-3xl">
          {!toggleSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!toggleSignIn && (
          <>
            <input
              {...register("firstName")}
              className=" border border-white  focus:border-white focus:outline-white outline-none  rounded-md p-4 my-4 w-full bg-black/10 opacity-70  "
              type="text"
              placeholder="Email or mobile number"
            />
            <p className=" text-red-500 text-md">{errors.email?.message}</p>
          </>
        )}
        <input
          {...register("email")}
          className=" border border-white  focus:border-white focus:outline-white outline-none  rounded-md p-4 my-4 w-full bg-black/10 opacity-70  "
          type="text"
          placeholder="Email or mobile number"
        />
        <p className=" text-red-500 text-md">{errors.email?.message}</p>
        <input
          {...register("password")}
          className="  border-white border-2 focus:border-white focus:outline-white outline-none  rounded-md p-4 my-4 w-full bg-black/10 opacity-70  "
          type="password"
          placeholder="Password"
        />
        <p className=" text-red-500 text-md">{errors.password?.message}</p>
        <button
          type="submit"
          className="p-4 my-6 w-full bg-red-700 rounded-md  text-white text-xl"
        >
          {toggleSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-2 my-1  text-md">
          {toggleSignIn ? "New to Netflix? " : "Already have an account? "}
          <span
            onClick={handleToggleSignIn}
            className="font-bold hover:underline"
          >
            {toggleSignIn ? " Sign Up now." : " Sign In."}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
