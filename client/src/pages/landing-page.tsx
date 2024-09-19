import landingPagePicture from "../assets/images/landin-page-picture.svg";
export const LandingPage = () => {
  return (   
    <div className="flex  h-screen justify-center ">
      <div className="w-96 rounded-md h-96 text-center pt-8 mt-10  bg-gray-700 p-5">
        <h1 className=" mt-8 font-bold text-2xl text-blue-400">
          Welcome to the TO-DO you piece of shit
        </h1>

        <div className="flex justify-center mt-8">
        <a href="/login">
            <button className="transition ease-in-out delay-100 bg-blue-400 hover:-translate-y-1 mr-2 hover:scale-110 hover:bg-indigo-400 duration-300 rounded-md w-20">
              Login
            </button>
          </a>
          <a href="/register">
            <button className="transition ease-in-out delay-100 bg-blue-400 hover:-translate-y-1 ml-2 hover:scale-110 hover:bg-indigo-400 duration-300 rounded-md w-20">
              Register
            </button>
          </a>

          </div>
        <div className="flex justify-evenly">
          <img
            src={landingPagePicture}
            alt="landing image"
            className="mt-8 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
