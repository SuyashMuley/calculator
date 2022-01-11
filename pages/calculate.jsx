import React, { useState, useEffect } from "react";
// import './App.css';

function Calculate() {
  //   const [currentSum, setCurrentSum] = useState(0);
  const [clear, setClear] = useState(false);
  const [Mean, setCalMean] = useState(0);
  const [Median, setMedian] = useState(0);
  const [Mode, setMode] = useState(0);

  useEffect(() => {
    document.querySelector("#result1").value = "";
    document.querySelector('#result2').value = "";
    document.querySelector('#result3').value = "";
  }, []);

  useEffect(() => {
    if (clear) document.querySelector("#result1").value = "";
    if (clear) document.querySelector("#result2").value = "";
    if (clear) document.querySelector("#result3").value = "";
  });

  const MeanCal = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum1 = document.querySelector("#num1").value;
    let currentNum2 = document.querySelector("#num2").value;
    let currentNum3 = document.querySelector("#num3").value;
    let currentNum4 = document.querySelector("#num4").value;
    let currentNum5 = document.querySelector("#num5").value;
    let currentNum6 = document.querySelector("#num6").value;
    let currentNum7 = document.querySelector("#num7").value;
    let currentNum8 = document.querySelector("#num8").value;
    let currentNum9 = document.querySelector("#num9").value;
    if (currentNum1 == "") return;
    let Mean =
      (parseInt(currentNum1) +
        parseInt(currentNum2) +
        parseInt(currentNum3) +
        parseInt(currentNum4) +
        parseInt(currentNum5) +
        parseInt(currentNum6) +
        parseInt(currentNum7) +
        parseInt(currentNum8) +
        parseInt(currentNum9)) /
      9;
    console.log(Mean);
    setCalMean(Mean);
  };

  const medianCal = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum1 = document.querySelector("#num1").value;
    let currentNum2 = document.querySelector("#num2").value;
    let currentNum3 = document.querySelector("#num3").value;
    let currentNum4 = document.querySelector("#num4").value;
    let currentNum5 = document.querySelector("#num5").value;
    let currentNum6 = document.querySelector("#num6").value;
    let currentNum7 = document.querySelector("#num7").value;
    let currentNum8 = document.querySelector("#num8").value;
    let currentNum9 = document.querySelector("#num9").value;
    if (currentNum1 == "") return;
    let Median = [currentNum1,currentNum2,currentNum3,currentNum4,currentNum5,currentNum6,currentNum7,currentNum8,currentNum9];
    // console.log(Median);
    // const { length } = Median;
    // Median.sort((a,b)=>a-b);
    // if(9%2 ===0){
    //     return(Median[9/ 2 -1] + Median[9/2]) / 2;
    // }
    // return Median[(9-1)/2];
    var a=0;
    var b=0;
    const medianSort = Median.sort((a,b=>a-b));
    return medianSort.length % 2 == 0 ? (medianSort[medianSort.length/2 -1] + medianSort[medianSort.length/2 - 1] / 2) : medianSort[Math.floor(medianSort.length/2)];

  };

  const ModeCal = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum1 = document.querySelector("#num1").value;
    let currentNum2 = document.querySelector("#num2").value;
    let currentNum3 = document.querySelector("#num3").value;
    let currentNum4 = document.querySelector("#num4").value;
    let currentNum5 = document.querySelector("#num5").value;
    let currentNum6 = document.querySelector("#num6").value;
    let currentNum7 = document.querySelector("#num7").value;
    let currentNum8 = document.querySelector("#num8").value;
    let currentNum9 = document.querySelector("#num9").value;
    if (currentNum1 == "") return;
    let Mode = [currentNum1,currentNum2,currentNum3,currentNum4,currentNum5,currentNum6,currentNum7,currentNum8,currentNum9];
    const mode = {};
    let max = 0, count = 0;
    // for(var i=0; i<9; i++){
    //     const item = Mode[i];
    //     if(mode[item]){
    //         mode[item]++;
    //     }else{
    //         mode[item] = 1;
    //     }
    //     if (count < mode[item]){
    //         max = item;
    //         count = mode[item];
    //     }
    // }
    // return max;
    Mode.forEach(elem=>mode[elem] = mode[elem] + 1 || 1);
    let modes = [];
    let maxFreq = 0;
    for(const key in mode){
      if(mode[key] > maxFreq){
        modes = [Number[key]];
      }
    }
  }

  const Clear = (e) => {
    e.preventDefault();
    // console.log("Result", currentSum);
    document.querySelector("form").reset();
    setClear(true);
    setCalMean(0);
  };

  return (
    <div className="App">
      <div className="app-title">
        <h1> Basic Form Calculator</h1>
      </div>
      <form>
        <div>
          <div>
            <input type="text" id="num1" placeholder="enter the 1st Number" />
          </div>
          <div>
            <input type="text" id="num2" placeholder="Enter the 2nd Number " />
          </div>
          <div>
            <input type="text" id="num3" placeholder="Enter the 3rd Number " />
          </div>
          <div>
            <input type="text" id="num4" placeholder="Enter the 4th Number " />
          </div>
          <div>
            <input type="text" id="num5" placeholder="Enter the 5th Number " />
          </div>
          <div>
            <input type="text" id="num6" placeholder="Enter the 6th Number " />
          </div>
          <div>
            <input type="text" id="num7" placeholder="Enter the 7th Number " />
          </div>
          <div>
            <input type="text" id="num8" placeholder="Enter the 8th Number " />
          </div>

          <div>
            <input type="text" id="num9" placeholder="Enter Number 9 " />
          </div>
          <div>
            <input type="text" id="result1" value={Mean} readOnly placeholder="Mean = " />
          </div>
          <div>
            <input type="text" id="result2" value={Median} readOnly placeholder="Median = " />
          </div>
          <div>
            <input type="text" id="result3" value={Mode} readOnly placeholder="Mode = " />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <button onClick={MeanCal}>Mean</button>
          </div>
          <div>
              <button onClick={medianCal}>Median</button>
          </div>
          <div className="col-xs-6">
            <button onClick={Clear}>Clear</button>
          </div>
          <div>
              <button onClick={ModeCal}>Mode</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Calculate;
