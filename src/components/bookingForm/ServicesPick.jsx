const ServicesPick = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <textarea
          value={formData.serviceMsg}
          id="message"
          rows={6}
          className="w-6/12 p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
          onChange={(e) =>
            setFormData({ ...formData, serviceMsg: e.target.value })
          }
        ></textarea>
      </div>
    </div>
  );
};

export default ServicesPick;
