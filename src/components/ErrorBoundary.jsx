import React, { useState, useEffect } from "react";

// TODO: ErrorBoundary component is not used since React Router has its own error handling mechanism (see main.jsx)
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // The effect runs when an error occurs in any child component
    const handleError = (error, info) => {
      console.error("Error caught by error boundary:", error, info);
      setHasError(true);
      setError(error);
    };

    // Attach the error handler to the window's error event
    window.addEventListener("error", handleError);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  if (hasError) {
    // Render fallback UI when an error occurs
    return (
      <>
        <h1>Something went wrong.</h1> <p>Error message: {error && <p>{error}</p>}</p>
      </>
    );
  }

  // Render children as usual if no error occurred
  return children;
};

export default ErrorBoundary;