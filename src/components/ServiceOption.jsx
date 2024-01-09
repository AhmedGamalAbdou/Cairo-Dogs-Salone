import bath from "../images/bath.jpg";
import { Link } from "react-router-dom";

const ServiceOption = () => {
  return (
    <div className=" mx-8 mb-8 flex flex-col pt-10 font-medium md:mx-16 lg:mx-32 text-[#000]">
      <div className="text-center">
        <p className="text-bold  text-[64px] ">
          Your dog deserves to be pampered!
        </p>
      </div>
      <div className="text-center">
        <p className="text-bold  text-[48px] ">Our Services</p>
      </div>

      <div className=" flex mt-10 mx-auto flex-col md:flex-row">
        <div className="overflow-hidden  aspect-video cursor-pointer rounded-xl relative group mx-10 mb-5">
          <div>
            <div className=" p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div
                className="font-bold text-3xl
                "
              >
                BATH ONLY
              </div>

              <div className="opacity-60 text-2xl ">
                This includes only a dog shampooed bath.
                <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"></div>
              </div>
            </div>
          </div>
          <img
            src={bath}
            alt=""
            className="object-cover  aspect-square group-hover:scale-110 transition duration-300 ease-in-out h-[200px] w-[500px]"
          />
        </div>

        <div className="overflow-hidden  aspect-video cursor-pointer rounded-xl relative group mx-10 mb-5">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div>
              <div className="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                <div className="font-bold text-3xl"> Nail Trim</div>

                <div className="opacity-60  text-2xl">
                  make nails look well-groomed, neat, and tidy
                </div>
              </div>
            </div>
          </div>
          <img
            src={bath}
            alt=""
            className="object-cover  aspect-square group-hover:scale-110 transition duration-300 ease-in-out h-[380px] w-[500px] "
          />
        </div>

        <div className="overflow-hidden  aspect-video cursor-pointer rounded-xl relative group mx-10 mb-5">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div>
              <div className="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                <div className="font-bold text-2xl">Ear Clean Out</div>

                <div className="opacity-60  text-3xl">
                  remove the wax manually, with specialist ear cleaner tools
                </div>
              </div>
            </div>
          </div>
          <img
            src={bath}
            alt=""
            className="object-cover  aspect-square group-hover:scale-110 transition duration-300 ease-in-out h-[380px] w-[500px]"
          />
        </div>
      </div>
      <Link to="/booking">
        <button className="bg-[#FFC700] hover:bg-[#F9C200] text-[#000] py-2 px-20  mx-auto block mt-5 border-2 border-black  ">
          Schedule Appointment
        </button>
      </Link>
    </div>
  );
};

export default ServiceOption;
