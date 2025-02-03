import React from 'react';

const AIRecommendations: React.FC = () => {
  const recommendations = [
    "Use organic fertilizers to improve soil health.",
    "Implement crop rotation to enhance yield.",
    "Consider drought-resistant crop varieties.",
    "Utilize technology for precision farming.",
  ];

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-semibold">AI Recommendations</h3>
      <ul className="mt-2">
        {recommendations.map((rec, index) => (
          <li key={index} className="text-gray-700 mb-2">
            - {rec}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIRecommendations;