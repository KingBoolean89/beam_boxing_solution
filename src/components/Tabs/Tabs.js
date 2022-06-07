import React, { useState, useEffect } from 'react';
import './Tabs.css'



const Tabs = ({data}) => {
    const [toggleState, setToggleState] = useState(1);
    const [memberCount, setMemberCount] = useState("");
    const [starterCount, setStarterCount] = useState("");
    const [refillCount, setRefillCount] = useState("")

    useEffect(() => {
      setMemberCount(data);
      calcStarterBoxes(data);
      calcRefillBoxes(data);
    }, [data])
    
    const toggleTab = (index) => {
      setToggleState(index);
    };

    const calcStarterBoxes = (data) => {
        const quotient = Math.floor(data?.length/2);
        const remainder = data?.length % 2;
        const totalStarters = quotient + remainder;
        setStarterCount(totalStarters);
    };

    const calcRefillBoxes = (data) => {
        const quotient = Math.floor(data?.length/4);
        const remainder = data?.length % 4;
        const totalRefills = quotient + remainder;
        setRefillCount(totalRefills);
    };

  
    return (

      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>
            Starter Boxes
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}>
            Refill Boxes
          </button> 
        </div>
  
        <div className="content-tabs">
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <h2>Summary: </h2>
            <p>Starter Boxes: {data && starterCount ? starterCount : null} </p>
            <p>Brushes: {data && memberCount ? memberCount.length : null}</p>
            <p>Replacement Heads: {data && memberCount ? memberCount.length : null}</p>
          </div>
  
          <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <h2>Summary:</h2>
            <p>Refill Boxes: {data && refillCount ? refillCount : null}</p>
            <p>Replacement Heads: {data && memberCount ? memberCount.length : null}</p>  
          </div>
        </div>
      </div>
    );
  }
  
  export default Tabs;