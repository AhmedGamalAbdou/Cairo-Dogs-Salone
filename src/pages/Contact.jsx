import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    serviceMsg: "",
    name: "",
    email: "",
    tel: "",
  });
  const notify = () => {
    toast.success("Thank you for filling out your information!");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("sucess");
  };

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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setName(e.target.value)}
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
            ></textarea>
          </div>

          <div className="w-[500px]">
            <button
              onClick={notify}
              className="bg-[#FFC700] hover:bg-[#F9C200] text-[#000] py-2 px-5   border-r-2 border-b-2 border-black  w-[200px] "
            >
              Submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
