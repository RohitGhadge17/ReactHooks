import React, { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffectTutorial = () => {

    const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO"
  }, []);

  return <div className="App">
    <input type="text" ref={inputRef} value="ROHIT" style={{width:400, height:40}}  />
  </div>;
};

export default LayoutEffectTutorial;
