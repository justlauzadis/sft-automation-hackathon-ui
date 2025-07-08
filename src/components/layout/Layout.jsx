import React, { useEffect, useState } from 'react';
import TopBar from '../topBar/TopBar';
import Sidebar from '../sidebar/Sidebar';
import { ReactComponent as QR } from "../../images/QR.svg";

import './layout.scss';

const DEFAULT_SHALLOW_EVENT_CONFIG = {
  name: '',
  type: '',
  year: '',
};

const Layout = ({children}) => {
    let [count, setCount] = useState(0);
    let [percentage, setPercentage] = useState(0);
    const [hide, setHide] = useState(false);
    
    const [eventConfig, setEventConfig] = useState({ ...DEFAULT_SHALLOW_EVENT_CONFIG });
    useEffect(() => {
      fetch(`https://sft-automation-hackathon-api.onrender.com/event/info/shallow`)
          .then(response => response.json())
          .then(data => setEventConfig({ ...DEFAULT_SHALLOW_EVENT_CONFIG,...data}));
    }, []);

    const hideFunction = () => {
        if (!hide) setHide(true);
    };
    useEffect(() => {
        setPercentage(Math.round(Math.random()*20));
},[percentage]);
    useEffect(() => {
        fetch(`https://sft-automation-hackathon-api.onrender.com/tasks/count`)
            .then(response => response.json())
            .then(data => setCount(data.count));
      }, [count]);

    return (
        <>
            <div className="start-bg" style={{display: hide ? 'none':'table'}}>
            <div id="container">
    <h1>:)</h1>
    <h2>I ran into problems and solved them at </h2>
        <h2 style={{display:'inline-block',  
            'background-color': '#FFFFFF',
            color:'#150DF7',
            'font-weight':'800',
            'padding-left':'8px'}}>{eventConfig.type} {eventConfig.name} {eventConfig.year}</h2>
    
    <h2>
      <span id="percentage">{percentage}</span>% complete</h2>
    <div id="details">
      <div id="qr">
        <div id="image">
          <QR className="title-section__image" alt="QR Code to this page" />
          {/* <img src={require('../../images/hovercode.png')} alt="QR Code" /> */}
        </div>
      </div>
      <div id="stopcode">
        <h5><span onClick={hideFunction}>Proceed</span> with caution - you’re dangerously close to overachieving.
          <br/>Success Code: AUTOMATED_EXCELLENCE</h5>
      </div>
    </div>
  </div>
            </div>
        <div className="page-layout" style={{display: hide ? 'grid':'none'}}>
            <TopBar />
            <Sidebar count={count}/>
            <main className="page-layout__main-content">{children}</main>
        </div> 
    </>
    )
}

export default Layout;
