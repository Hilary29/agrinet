import React, { useState } from "react";

// Define the props interface if needed
interface FarmPredictionProps {
  onPredict: (cropType: string, weather: string) => void; // Optional callback for predictions
}

const Prediction: React.FC<FarmPredictionProps> = ({ onPredict }) => {
  const [cropType, setCropType] = useState<string>("");
  const [weather, setWeather] = useState<string>("");
  const [prediction, setPrediction] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple prediction logic (can be replaced with an API call)
    const predictedYield = predictYield(cropType, weather);
    setPrediction(predictedYield);
    
    if (onPredict) {
      onPredict(cropType, weather);
    }
  };

  const predictYield = (crop: string, weather: string): string => {
    // Placeholder logic for predictions
    if (crop === "Wheat" && weather === "Sunny") {
      return "High yield expected!";
    } else if (crop === "Corn" && weather === "Rainy") {
      return "Moderate yield expected.";
    } else {
      return "Yield prediction is uncertain.";
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-4">Farm Yield Prediction</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Crop Type</label>
          <input
            type="text"
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter crop type (e.g., Wheat, Corn)"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Weather Condition</label>
          <input
            type="text"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter weather condition (e.g., Sunny, Rainy)"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Predict Yield
        </button>
      </form>
      {prediction && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
          <h4 className="font-semibold">Prediction Result:</h4>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default Prediction;