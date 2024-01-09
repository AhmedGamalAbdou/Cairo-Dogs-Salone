import bath from "../images/bath.jpg";

const Testmonials = () => {
  return (
    <div>
      <div className="mx-8 mb-8 flex flex-col  pt-10 font-medium md:mx-16 lg:mx-32 text-[#000] border-r-4  border-b-4  border-black">
        <p className="text-[64px] text-center  text-bold">
          What Our Happy Clients Say
        </p>

        <div className=" flex flex-col md:flex-row  container justify-around mb-5 mx-auto">
          <div className="flex flex-col  pb-10 mt-5 bg-white w-80 h-80 shadow-lg pt-10 text-center mx-auto ">
            <img
              className="w-14 h-14 rounded-full mx-auto shadow-lg mb-3"
              src={bath}
              alt="Bonnie "
            />

            <p className="px-4 mt-2">
              I have had Sophie washed and groomed since she was a puppy, she is
              now 7 years old. I find them so friendly and they’re really
              brilliant at their skill.
            </p>

            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-10 ">
              Mrs Griffin, and Sophie
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              cocker spaniel
            </span>
          </div>

          <div className="flex flex-col  pb-10 mt-5 bg-white w-80 h-80 shadow-lg pt-10 text-center mx-auto ">
            <img
              className="w-14 h-14 rounded-full mx-auto shadow-lg mb-3"
              src={bath}
              alt="Bonnie "
            />

            <p className="px-4 mt-2">
              I have had Sophie washed and groomed since she was a puppy, she is
              now 7 years old. I find them so friendly and they’re really
              brilliant at their skill.
            </p>

            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-10 ">
              Mrs Griffin, and Sophie
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              cocker spaniel
            </span>
          </div>

          <div className="flex flex-col  pb-10 mt-5 bg-white w-80 h-80 shadow-lg pt-10 text-center mx-auto">
            <img
              className="w-14 h-14 rounded-full mx-auto shadow-lg mb-3"
              src={bath}
              alt="Bonnie "
            />

            <p className="px-4 mt-2">
              I have had Sophie washed and groomed since she was a puppy, she is
              now 7 years old. I find them so friendly and they’re really
              brilliant at their skill.
            </p>

            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-10 ">
              Mrs Griffin, and Sophie
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              cocker spaniel
            </span>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Testmonials;
