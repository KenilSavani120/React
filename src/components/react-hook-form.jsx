// src/components/UserForm.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";

export function UserForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (formData) => {
    setData(JSON.stringify(formData, null, 2)); // Pretty print JSON
  };

  return (
    <div className="form-container">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
            placeholder="First name"
          />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select...</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
          {errors.category && <p className="error">{errors.category.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="aboutYou">About You:</label>
          <textarea
            id="aboutYou"
            {...register("aboutYou")}
            placeholder="About you"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {data && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          <pre>{data}</pre>
        </div>
      )}
    </div>
  );
}
