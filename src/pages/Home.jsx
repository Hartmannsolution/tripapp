import React from "react";
import "./TwoPanes.css"; // Create a TwoPanes.css file for styling

const ScrollablePanes = () => {
  return (
    <div className="container">
      <div className="left-pane">
        <h3>Left Pane</h3>
        {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>Item {i + 1}</p>
            )
        )}

      </div>
      <div className="right-pane">
        <h3>Right Pane</h3>
        <p>Content A</p>
        <p>Content B</p>
        <p>Content C</p>
        <p>Content D</p>
        <p>Content E</p>
      </div>
    </div>
  );
};

export default ScrollablePanes;
