import Header from "./Header";

function Login() {
  return (
    <div className="relative">
      <Header />
      <div className="relative -z-10 bg-gradient-to-b from-current to-black/100">
        <img
          className=" absolute filter brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg"
          alt="background image"
        />
      </div>

      <form className="w-[450px] absolute p-12 my-36 bg-black mx-auto left-0 right-0 h-screen text-white  bg-opacity-70  rounded-md">
        <h1 className="font-bold py-4 text-3xl">Sign In</h1>
        <input
          className=" border border-white  focus:border-white focus:outline-white outline-none  rounded-md p-4 my-4 w-full bg-black/10 opacity-70  "
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          className="  border-white border-2 focus:border-white focus:outline-white outline-none  rounded-md p-4 my-4 w-full bg-black/10 opacity-70  "
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-md  text-white text-xl">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
