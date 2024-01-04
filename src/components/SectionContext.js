import React from "react"
import { createContext, useContext, useState } from 'react';

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleButtonClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <SectionContext.Provider value={{ currentSection, handleButtonClick }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  return useContext(SectionContext);
};
