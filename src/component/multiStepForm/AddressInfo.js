import React from "react";

const AddressInfo = ({ formData, handleInput, errors }) => {
  const { adress1, adress2, state, city, zipcode } = formData;
  return (
    <div>
      <h1>AddressInfo</h1>
      <form>
        <input
          type="text"
          name="adress1"
          placeholder="adress1"
          onChange={handleInput}
          value={adress1}
        />
        {errors && <p>{errors.adress1}</p>}
        <input
          type="text"
          name="adress2"
          placeholder="adress2"
          onChange={handleInput}
          value={adress2}
        />
        {errors && <p>{errors.adress2}</p>}
        <input
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={handleInput}
        />
        {errors && <p>{errors.city}</p>}
        <input
          type="text"
          name="state"
          placeholder="state"
          value={state}
          onChange={handleInput}
        />
        {errors && <p>{errors.state}</p>}
        <input
          type="text"
          name="zipcode"
          placeholder="zipcode"
          value={zipcode}
          onChange={handleInput}
        />
        {errors && <p>{errors.zipcode}</p>}
      </form>
    </div>
  );
};

export default AddressInfo;
