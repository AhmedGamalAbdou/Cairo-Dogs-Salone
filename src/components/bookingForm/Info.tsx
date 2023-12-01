const Info = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="mx-10 pt-5">
        <div className=" flex flex-col items-center justify-center mt-5">
          <input
            value={formData.name}
            className="shadow-sm bg-gray-50 border md:w-4/12 w-9/12 border-black text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block mx-2 my-5  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="your name"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            value={formData.email}
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border  md:w-4/12 w-9/12 border-black text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block mx-2 my-5  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="email"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            value={formData.tel}
            type="tel"
            id="tel"
            className="shadow-sm bg-gray-50 border  md:w-4/12 w-9/12 border-black text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block mx-2 my-5  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="phone number"
            required
            onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
