import { useState } from "react";
import DateAndTime from "../components/bookingForm/DateAndTime";
import ServicesPick from "../components/bookingForm/ServicesPick";
import Info from "../components/bookingForm/Info";
import ServiceSummary from "../components/bookingForm/ServiceSummary";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { createABooking } from "../redux/slices/bookingSlice";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";

const Booking = () => {
  const dispatch = useDispatch();

  const FormTitles = [
    " when do you want to come ?",
    "what do you need ?",
    "please fill out the form",
    "booking summary",
  ];
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <DateAndTime formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <ServicesPick formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Info formData={formData} setFormData={setFormData} />;
    } else {
      return <ServiceSummary formData={formData} setFormData={setFormData} />;
    }
  };

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    serviceMsg: "",
    name: "",
    email: "",
    tel: "",
  });
  const navigate = useNavigate();

  return (
    <>
      <div className=" mx-8 mb-8 flex text-center  pt-10 font-medium md:mx-16 lg:mx-32 flex-col	">
        <div className="  border-black border-4">
          <p className="text-[24px] mt-5"> Book An Appointment</p>
          <p className="text-[20px] mt-5"> {FormTitles[page]}</p>
          <div> {PageDisplay()}</div>
          <div className="">
            <button
              disabled={page === 0}
              className="mx-2 bg-[#fff] text-[#000] py-2 px-5  border-2 border-black my-2"
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              {" "}
              prev
            </button>
            <button
              className="mx-2 bg-[#FFC700] hover:bg-[#F9C200] text-[#000] py-2 px-5  border-2 border-black my-2"
              onClick={(e) => {
                if (page === FormTitles.length - 1) {
                  e.preventDefault();
                  dispatch(createABooking(formData));

                  toast.success(
                    "Thank you for filling out your information we will revert to you soon."
                  );
                  navigate("/");
                } else {
                  setPage((currentPage) => currentPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "submit" : "next"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
