import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Score({ s_prop }) {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score || 0; // Default to 0 if score isn't passed

  const handleTryAgain = () => {
    navigate('/Quiz');
  };

  return (
    <div>
      <h1>{s_prop}</h1>
      <p>
        You got {score} / 5
      </p>
      <button onClick={handleTryAgain}>Try Again</button>
    </div>
  );
}

export default Score;
