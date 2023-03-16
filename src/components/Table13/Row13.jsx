import React, {  useState } from "react";
import Button from "../Button";
import Cell from "../Cell";
import "../../App.css";
import Button13 from "./Button13";

const Row13 = () => {
  const [values, setValues] = useState([
   "Знач." , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  ]);

  return (
    <>
      <div className="main">
        {values
          ? values.map((element, index) => {
              return <Cell number={values[index]} />;
            })
          : null}
      </div>
      <Button13 setValues={setValues}/>
    </>
  );
};

export default Row13;
