import React from "react";

const ConfirmationData = ({ handleSubmit, formData }) => {
  const { name, email, phone, adress1, adress2, state, city, zipcode } =
    formData;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Confirmation</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>phone: {phone}</p>
        <p>Address Line 1: {adress1}</p>
        <p>Address Line 2: {adress2}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>zipcode:{zipcode}</p>
      </form>
    </div>
  );
};

export default ConfirmationData;
