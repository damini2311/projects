import React, { useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AddressInfo from "./AddressInfo";
import ConfirmationData from "./ConfirmationData";
import "./form.css";

const Form = () => {
  const [tab, setTab] = useState(0);
  const [errors, setErrors] = useState({});
  const FormPage = ["step1", "step2", "step3"];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adress1: "",
    adress2: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //------------- local storage-----------
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  //---------------tabnavigation-----------

  const displayPages = () => {
    if (tab === 0) {
      return (
        <PersonalDetails
          formData={formData}
          handleInput={handleInput}
          errors={errors}
        />
      );
    } else if (tab === 1) {
      return (
        <AddressInfo
          formData={formData}
          handleInput={handleInput}
          errors={errors}
        />
      );
    } else {
      return (
        <ConfirmationData formData={formData} handleSubmit={handleSubmit} />
      );
    }
  };

  //---------------validation----------------

  const validateStep1 = () => {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let temErrorObj = {};

    if (!formData.name) {
      temErrorObj.name = "name is required";
    }

    if (!formData.email) {
      temErrorObj.email = "email is required";
    } else if (!regex.test(formData.email)) {
      temErrorObj.email = "email is invalid";
    }

    if (!formData.phone) {
      temErrorObj.phone = "phone no is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      temErrorObj.phone = "phone no. in invalid";
    }

    setErrors(temErrorObj);
    return Object.keys(temErrorObj).length === 0;
  };
  const validateStep2 = () => {
    let temErrorObj = {};
    if (!formData.adress1) {
      temErrorObj.name = "adress is required";
    }
    if (!formData.adress2) {
      temErrorObj.adress2 = "adress2 is required";
    }
    if (!formData.city) {
      temErrorObj.city = "city is required";
    }
    if (!formData.state) {
      temErrorObj.state = "state is required";
    }
    if (!formData.zipcode) {
      temErrorObj.zipcode = "zipcode is required";
    } else if (formData.zipcode.length !== 6) {
      temErrorObj.zipcode = "Zipcode must be 6 digits";
    }

    setErrors(temErrorObj);
    return Object.keys(temErrorObj).length === 0;
  };

  const handleNext = () => {
    if (tab === 0) {
      if (validateStep1()) {
        setTab(tab + 1);
      }
    } else if (tab === 1) {
      if (validateStep2()) {
        setTab(tab + 1);
      }
    } else {
      setTab(tab + 1);
    }
  };

  //------submitt fotm---------
  const handleSubmit = () => {
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance of success
      if (success) {
        alert("Form submitted successfully!");
        localStorage.removeItem("formData"); // Clear local storage on successful submission
      } else {
        alert("Submission failed! Please try again.");
      }
    }, 1000);
  };

  return (
    <div>
      {/* <h1>{FormPage[tab]}</h1> */}
      <div>{displayPages()}</div>
      <button onClick={() => setTab(tab - 1)} disabled={tab === 0}>
        Previous
      </button>
      <button
        onClick={() => {
          if (tab === FormPage.length - 1) {
            return handleSubmit();
          } else {
            handleNext();
          }
        }}
      >
        {tab === FormPage.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Form;
