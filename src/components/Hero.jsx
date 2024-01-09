import dog from "../images/dogbathing.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="md:mx-16 lg:mx-32 mx-2  md:text-left text-center">
      <p className="text-9xl font-bold">
        {" "}
        The love and kindness your dog deserves
      </p>
      <img
        src={dog}
        className="h-96 w-full mt-10 cover object-cover border-2 border-black"
      />
      <div className="flex justify-between flex-col md:flex-row  ">
        <div className="text-left  mt-5 ">
          <p className="text-[21px] font-medium w-[520px] px-2 ">
            cairo dog salone is a dog grooming salon based in cairo, providing
            calm and rejuvenating experiences for dogs.
          </p>
        </div>

        <div className="mt-5 flex ">
          <p className="text-xl font-bold px-2"> follow us </p>
          <span className=" text-[24px] px-2">
            <BsFacebook />
          </span>
          <span className=" text-[24px] px-2 ">
            <BsInstagram />
          </span>
          <span className=" text-[24px] px-2">
            {" "}
            <BsTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
