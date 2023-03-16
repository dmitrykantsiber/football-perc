import React, { useState } from "react";
import "../../App.css";

const Button6 = ({setValues}) => {
  let newArray = ["Знач." , 0, 0, 0, 0, 0, 0,,]
  const [inputValue, setInputValue] = useState(0)
  const handleSubmit = () => {
    setValues(["Знач." , 0, 0, 0, 0, 0, 0,])
    for(let i=0; i<inputValue;i++){
      let r = Math.floor(Math.random() * (6 - 1 + 1) + 1)
      newArray[r] +=1
    }
    setValues(newArray)
  };
  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className="button">
      <input style={{marginTop:"20px", width:"200px"}} type="number" value={inputValue} onChange={handleOnChange}/>
      <button style={{width:"200px", height:"100px", fontSize:"25px", margin:"20px"}} onClick={handleSubmit}>Генерировать</button>
    </div>
  );
};

export default Button6;
