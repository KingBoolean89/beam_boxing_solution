import React, { useState } from 'react';
import './Tabs.css'

function Tabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Starter Boxes
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Refill Boxes
          </button>
          
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Summary:</h2>
            <p>Starter Boxes:</p>
            <p>Brushes:</p>
            <p>Replacement Heads:</p>
            
           
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Summary:</h2>
            <p>Refill Boxes:</p>
            <p>Replacement Heads:</p>
            
            
          </div>
  
         
        </div>
      </div>
    );
  }
  
  export default Tabs;