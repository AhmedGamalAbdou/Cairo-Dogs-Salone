const DateAndTime = ({ formData, setFormData }) => {
  return (
    <div>
      {" "}
      <div className="mx-10 pt-5">
        <div className=" flex flex-col items-center justify-center mt-5">
          <input
            value={formData.date}
            type="date"
            id="date"
            className="shadow-sm bg-gray-50 border md:w-4/12 w-9/12 border-black text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block mx-2 my-5  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="date"
            required
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <input
            value={formData.time}
            type="time"
            id="time"
            className="shadow-sm bg-gray-50 border  md:w-4/12 w-9/12 border-black text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block mx-2 my-5  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="time"
            required
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            min="09:00"
            max="17:00"
          />
        </div>
      </div>
    </div>
  );
};

export default DateAndTime;
