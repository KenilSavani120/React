import React, { useState } from 'react';
import { z } from 'zod';

// Define a schema for form validation using Zod
const userSchema = z.object({
  name: z.string().min(1, "Name is required"),          // Name must be a string and required
  age: z.number().min(18, "You must be at least 18"),   // Age must be a number and at least 18
  email: z.string().email("Invalid email address"),     // Email must be a valid email address
});

function UserFormZod() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data using Zod
    try {
      userSchema.parse({
        name: formData.name,
        age: Number(formData.age), // Convert age to a number before validation
        email: formData.email,
      });
      setErrors({});
      alert("Form submitted successfully!");
      // Proceed with form submission logic here (e.g., sending data to the server)
    } catch (error) {
      // Collect validation errors and set them in the state
      const formattedErrors = error.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {});
      setErrors(formattedErrors);
    }
  };

  return (
    <div className="form-container text-black ">
      <h1>User Form Zod</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <button className='bg-white text-blue-500 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-700' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserFormZod;
