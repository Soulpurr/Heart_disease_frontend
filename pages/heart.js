import React, { useState } from 'react';

const PredictionComponent = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [cp, setCp] = useState('');
  const [trestbps, setTrestbps] = useState('');
  const [chol, setChol] = useState('');
  const [fbs, setFbs] = useState('');
  const [restecg, setRestecg] = useState('');
  const [thalach, setThalach] = useState('');
  const [exang, setExang] = useState('');
  const [oldpeak, setOldpeak] = useState('');
  const [slope, setSlope] = useState('');
  const [ca, setCa] = useState('');
  const [thal, setThal] = useState('');
  const [dis, setdis] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      age: parseFloat(age),
      sex: parseFloat(sex),
      cp: parseFloat(cp),
      trestbps: parseFloat(trestbps),
      chol: parseFloat(chol),
      fbs: parseFloat(fbs),
      restecg: parseFloat(restecg),
      thalach: parseFloat(thalach),
      exang: parseFloat(exang),
      oldpeak: parseFloat(oldpeak),
      slope: parseFloat(slope),
      ca: parseFloat(ca),
      thal: parseFloat(thal),
    };

    try {
      const response = await fetch('http://127.0.0.1:4000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log('Prediction response:', data.prediction[0]);
      setdis(data.prediction[0])
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
        <div className={`${dis==null?"hidden":""}`}>
        {!dis?(<div className='text-green-500 text-2xl font bold'>You have no heart Disease as of now</div>):
        (<div className='text-red-500 text-2xl font bold'>You have heart Disease as of now</div>)}
        </div>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Predict Heart Disease</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            placeholder="Age"
            className="input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="number"
            placeholder="Sex"
            className="input"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          />
          <input
            type="number"
            placeholder="Chest Pain"
            className="input"
            value={cp}
            onChange={(e) => setCp(e.target.value)}
          />
          <input
            type="number"
            placeholder="Resting Blood Pressure"
            className="input"
            value={trestbps}
            onChange={(e) => setTrestbps(e.target.value)}
          />
          <input
            type="number"
            placeholder="Cholesterol"
            className="input"
            value={chol}
            onChange={(e) => setChol(e.target.value)}
          />
          <input
            type="number"
            placeholder="Fasting Blood Sugar"
            className="input"
            value={fbs}
            onChange={(e) => setFbs(e.target.value)}
          />
          <input
            type="number"
            placeholder="Resting Electrocardiographic Results"
            className="input"
            value={restecg}
            onChange={(e) => setRestecg(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Heart Rate Achieved"
            className="input"
            value={thalach}
            onChange={(e) => setThalach(e.target.value)}
          />
          <input
            type="number"
            placeholder="Exercise Induced Angina"
            className="input"
            value={exang}
            onChange={(e) => setExang(e.target.value)}
          />
          <input
            type="number"
            placeholder="ST Depression Induced by Exercise Relative to Rest"
            className="input"
            value={oldpeak}
            onChange={(e) => setOldpeak(e.target.value)}
          />
          <input
            type="number"
            placeholder="Slope of the Peak Exercise ST Segment"
            className="input"
            value={slope}
            onChange={(e) => setSlope(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of Major Vessels Colored by Flourosopy"
            className="input"
            value={ca}
            onChange={(e) => setCa(e.target.value)}
          />
          <input
            type="number"
            placeholder="Thal"
            className="input"
            value={thal}
            onChange={(e) => setThal(e.target.value)}
          />
          <button
            type="submit"
            className="btn bg-indigo-500 text-white hover:bg-indigo-600"
            onClick={handleSubmit}
          >
            Predict
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default PredictionComponent;
