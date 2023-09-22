import React, { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);
  return (
    <div>
      <h1>{returnComment("Rohit")}</h1>
    </div>
  );
};

export default Child;
