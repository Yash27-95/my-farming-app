import React, { createContext, useContext, useState, useEffect } from 'react';

const AIContext = createContext();

export const useAI = () => useContext(AIContext);

export const AIProvider = ({ children }) => {
  const [recommendation, setRecommendation] = useState(() => {
    const saved = localStorage.getItem('ai_recommendation');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (recommendation) {
      localStorage.setItem('ai_recommendation', JSON.stringify(recommendation));
    }
  }, [recommendation]);

  return (
    <AIContext.Provider value={{ recommendation, setRecommendation }}>
      {children}
    </AIContext.Provider>
  );
};
