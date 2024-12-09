import React, { createContext, useContext, useState } from "react";

const ErrorContext = createContext({ error:"", handleGlobalError: () => {} });

export function ErrorProvider({ children }) {
  const [error, setError] = useState("");

  const handleGlobalError = (error) => {
    console.error("Global error:", error);
    setError(error.message || error.msg || `An error occurred: ${JSON.stringify(error)}`);
  };

  return (
    <ErrorContext.Provider value={{ error, handleGlobalError }}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useError() {
  return useContext(ErrorContext);
}
