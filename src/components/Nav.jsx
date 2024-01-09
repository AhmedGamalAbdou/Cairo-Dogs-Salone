import { useState } from "react";
import { useMediaQuery } from "../util/useMedia";
import { NavLink, Link } from "react-router-dom";
export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <nav className=" relative mx-8 mb-8 flex items-center justify-between  pt-10 font-medium md:mx-16 lg:mx-32 text-[#000] ">
      <h1 className="text-3xl font-bold ">
        <Link className="py-2" to="/">
          Cairo Dogs Salone
        </Link>
      </h1>

      {matches && (
        <div className="flex gap-12 ">
          <NavLink className="py-2" to="/about">
            About
          </NavLink>
          <NavLink className="py-2" to="/services">
            Services
          </NavLink>
          <NavLink className="py-2" to="/contact">
            Contact
          </NavLink>
          <Link to="/booking">
            <button className="bg-[#FFC700] hover:bg-[#F9C200] text-[#000] py-2 px-5  border-2 border-black  ">
              Book Appointment
            </button>
          </Link>
        </div>
      )}

      {!matches && (
        <div
          className="space-y-2 cursor-pointer z-50"
          onClick={() => setToggled((prevToggle) => !prevToggle)}
        >
          <div className="w-8 h-0.5 bg-black"></div>
          <div className="w-8 h-0.5 bg-black"></div>
          <div className="w-8 h-0.5 bg-black"></div>
        </div>
      )}
      {toggled && !matches && (
        <div
          className="fixed left-0 top-0  z-40 flex h-screen
        w-full flex-col items-center  justify-center  gap-24 bg-[#fff] text-2xl font-bold text-[#000]"
        >
          <NavLink to="/about"> About</NavLink>
          <NavLink to="/services"> Services </NavLink>
          <NavLink to="/contact"> Contact</NavLink>
        </div>
      )}
    </nav>
  );
}
