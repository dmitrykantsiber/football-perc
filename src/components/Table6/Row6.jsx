import React, {  useState } from "react";
import Button from "../Button";
import Cell from "../Cell";
import "../../App.css";
import Button6 from "./Button6";

const Row6 = () => {
  const [values, setValues] = useState([
   "Знач." , 0, 0, 0, 0, 0, 0,
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
      <Button6 setValues={setValues}/>
    </>
  );
};

export default Row6;
