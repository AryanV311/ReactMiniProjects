

import { useState } from "react";
import "./App.css";

function App() {

  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitHandler = (e) => {
      e.preventDefault();

      if(weight === 0 || weight < 0 || isNaN(weight)){
        alert("Enter a valid weight")
      } else if(height === 0 || height < 0 || isNaN(height)) {
        alert("Enter a valid height")
      } else {
        const bmi = (weight / ((height * height) / 10000));
        setBmi(bmi.toFixed(2))

      if(isNaN(bmi)){
        setMessage("Unable to calculate")
      }  

      if(bmi <= 18.6){
          setMessage("you are under weight")
      }else if(bmi > 18.6 && bmi < 24.9){
        setMessage("you are Normal weight")
      } else {
        setMessage("you are Over weight")
      }
      }

      setHeight("")
      setWeight("")
      // setMessage("")
  }


  return (
    <>
      <div className="conatiner">
        <div className="form-card">
          <h1>Claculate Your BMI</h1>
          <form onSubmit={onSubmitHandler}>
            <div>
            <label>Weight in (lbs)</label>
            <input type="text" placeholder="enter your weight in (lbs)" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>

            <div>
            <label>Height</label>
            <input type="text" placeholder="enter your height" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>

            <div className="btn">
              <button type="submit">calculate</button>
            </div>

            <div className="result">
              <p>your BMI is:{bmi} </p>
            </div>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
