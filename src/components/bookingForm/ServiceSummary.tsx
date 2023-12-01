const ServiceSummary = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="mt-5 flex flex-col border-black border-2 mx-12  text-center">
        <p>
          {" "}
          {formData.date} / {formData.time}
        </p>
        <p> </p>
        <p> {formData.name}</p>
        <p> {formData.email}</p>
        <p> {formData.tel}</p>
        <p> {formData.serviceMsg}</p>
      </div>
    </div>
  );
};

export default ServiceSummary;
