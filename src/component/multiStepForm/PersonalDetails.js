import React from "react";

const PersonalDetails = ({ formData, handleInput, errors }) => {
  const { name, email, phone } = formData;
  return (
    <div>
      <h1>PersonalDetails</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInput}
        />
        {errors && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInput}
        />
        {errors && <p>{errors.email}</p>}
        <input
          type="text"
          name="phone"
          placeholder="number"
          value={phone}
          onChange={handleInput}
        />
        {errors && <p>{errors.phone}</p>}
      </form>
    </div>
  );
};

export default PersonalDetails;
