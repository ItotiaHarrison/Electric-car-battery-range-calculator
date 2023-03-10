import React, { useState } from 'react';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaStats from '../components/TeslaStats/TeslaStats';
import './TeslaBattery.css';
import TeslaCounter from '../components/TeslaCounter/TeslaCounter';

const TeslaBattery = (props) => {
  const [config, setConfig] = useState({
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19,
  });
  const [carstats, setCarStats] = useState([]);

  const updateCounterState = (title, newValue) => {
    const newConfig = { ...config };
    // update config state with new value
    title === 'Speed' ? newConfig['speed'] = newValue : newConfig['temperature'] = newValue;
    // update our state
    setConfig(newConfig);
  };

  const increment = (e, title) => {
    e.preventDefault();
    let currentValue, maxValue, step;
    const { speed, temperature } = props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = config.speed;
      maxValue = speed.max;
      step = speed.step;
    } else {
      currentValue = config.temperature;
      maxValue = temperature.max;
      step = temperature.step;
    }
    if (currentValue < maxValue) {
      const newValue = currentValue + step;
      updateCounterState(title, newValue);
    }
  };

  const decrement = (e, title) => {
    e.preventDefault();
    let currentValue, minValue, step;
    const { speed, temperature } = props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = config.speed;
      minValue = speed.min;
      step = speed.step;
    } else {
      currentValue = config.temperature;
      minValue = temperature.min;
      step = temperature.step;
    }
    if (currentValue > minValue) {
      const newValue = currentValue - step;
      updateCounterState(title, newValue);
    }
  };

  return (
    <form className="tesla-battery">
      <h1>Range Per Charge</h1>
      <TeslaCar wheelsize={config.wheels} />
      <TeslaStats carstats={carstats} />
      <div className="tesla-controls cf">
        <TeslaCounter
          currentValue={config.speed}
          initValues={props.counterDefaultVal.speed}
          increment={increment}
          decrement={decrement}
        />
        <div className="tesla-climate-container cf">
          <TeslaCounter
            currentValue={config.temperature}
            initValues={props.counterDefaultVal.temperature}
            increment={increment}
            decrement={decrement}
          />
        </div>
      </div>
      <TeslaNotice />
    </form>
  );
};

export default TeslaBattery;