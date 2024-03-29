import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createMsg } from "../redux/slices/msgSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const email = useRef(null);
  const message = useRef("");
  const name = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(
      createMsg({
        email: email.current ? email.current.value : null,
        name: name.current ? name.current.value : null,
        message: message.current.value,
      })
    );
    toast.success(
      "Thank you for filling out your information we will revert to you soon."
    );
    navigate("/");
  }

  return (
    <div>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-[64px] font-bold text-center">Contact Us</h2>
        <form className="flex flex-col  gap-4 py-20" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="Name"
              id="Name"
              className="shadow-sm bg-gray-50 border border-black text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Name"
              required
              ref={name}
            />
          </div>
          <div>
            <label
              htmlFor="Email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="Email"
              id="Email"
              className="shadow-sm bg-gray-50 border border-black text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Email"
              required
              ref={email}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              ref={message}
            ></textarea>
          </div>

          <div className="w-[500px]">
            <button className="bg-[#FFC700] hover:bg-[#F9C200] text-[#000] py-2 px-5   border-r-2 border-b-2 border-black  w-[200px] ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
