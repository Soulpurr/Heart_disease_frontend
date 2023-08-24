import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Heart() {
  const [inputValues, setInputValues] = useState({
    sex: 0,
    age: 0,
    cp: 0,
    trestbps: 0,
    chol: 0,
    fbs: 0,
    restecg: 0,
    thalach: 0,
    slope: 0,
    ca: 0,
    thal: 0,
  });
  const fieldLabels = {
    sex: "Sex (0=female, 1=male)",
    age: "Age-0-100",

    chol: "Chol-Cholesterol Level-(98-400)",
    fbs: "Fbs-(fasting blood sugar &gt; 120 mg/dl) (1 = true; 0 = false)",
    restecg: "Restecg-resting electrocardiographic results(0,1)",

    ca: "serum cholestoral in mg/dl",

    trestbps: "Trestbps-Resting Blood Pressure (94 - 300 mmHg)",
    thalach: "Thalach-maximum heart rate achieved (71 - 202)",

    cp: "Cp-Chest Pain Type (0=No,1=typical, 2=atypical, 3=non-angina, 4=asymptomatic)",
    slope: "Peak Exercise ST Segment (0=flat or downsloping, 1=upsloping)",
    thal: "Thal-Thalium Test: (0=normal or fixed defect, 1=reversible defect)",
  };
  const fieldRanges = {
    sex: { min: 0, max: 1, step: 1 },
    age: { min: 0, max: 100, step: 1 },
    cp: { min: 0, max: 4, step: 1 },
    trestbps: { min: 94, max: 300, step: 1 },
    chol: { min: 98, max: 400, step: 1 },
    fbs: { min: 0, max: 1, step: 1 },
    restecg: { min: 0, max: 1, step: 1 },
    thalach: { min: 71, max: 250, step: 1 },
    slope: { min: 0, max: 1, step: 1 },
    ca: { min: 0, max: 3, step: 1 },
    thal: { min: 0, max: 1, step: 1 },
  };
  const handleInputChange = (field, value) => {
    // Ensure the input value is within the allowed range
    const newValue = Math.min(
      Math.max(value, fieldRanges[field].min),
      fieldRanges[field].max
    );

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [field]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle form submission, make API calls, etc.
    const requestBody = {
      age: parseFloat(inputValues.age),
      sex: parseFloat(inputValues.sex),
      cp: parseFloat(inputValues.cp),
      trestbps: parseFloat(inputValues.trestbps),
      chol: parseFloat(inputValues.chol),
      fbs: parseFloat(inputValues.fbs),
      restecg: parseFloat(inputValues.restecg),
      thalach: parseFloat(inputValues.thalach),

      slope: parseFloat(inputValues.slope),
      ca: parseFloat(inputValues.ca),
      thal: parseFloat(inputValues.thal),
    };

    try {
      const response = await fetch("https://heart-nwvc.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log("Prediction response:", data.prediction[0]);
      console.log(data.prediction[0]);
      let toastType = "";
      let toastMessage = "";
      if (data.prediction[0] ==0) {
        toastType = "success";
        toastMessage = "You have a low chance of having the disease.";
      } else if (data.prediction[0] == 1) {
        toastType = "error";
        toastMessage = "You have a higher chance of having the disease.";
      } else {
        toastType = "info";
        toastMessage = "Prediction not available.";
      }

      // Display the toast
      toast[toastType](toastMessage, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000, // 5 seconds
      });
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("Form submitted with values:", inputValues);
  };

  return (
    <div className="w-full md:w-[75%] mt-5 bg-[#d9e5f1] rounded-xl m-auto p-4">
    <h1 className="text-center text-4xl font-bold">Heart Disease Predictor</h1>
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col space-y-4">
          <form onSubmit={handleSubmit}>
            {Object.keys(inputValues).map((field) => (
              <div key={field} className=" flex justify-center items-center flex-col lg:flex-row lg:justify-between  ">
                <div className="text-[15px] font-bold text-center">{fieldLabels[field]}</div>
                <div className="w-[40%]">
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      min={fieldRanges[field].min}
                      max={fieldRanges[field].max}
                      value={inputValues[field]}
                      step={fieldRanges[field].step}
                      onChange={(e) =>
                        handleInputChange(field, parseInt(e.target.value))
                      }
                      className="w-[20rem]"
                    />

                    <input
                      type="number"
                      value={inputValues[field]}
                      onChange={(e) =>
                        handleInputChange(field, parseInt(e.target.value))
                      }
                      className="w-[15%] h-[2rem] mr-[15rem] bg-red-300"
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-5">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="mt-5 text-center">
        {/* Display API results here */}
      </div>
    </div>
  );
}

export default Heart;
