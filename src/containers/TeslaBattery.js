import React from 'react';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import './TeslaBattery.css';
class TeslaBattery extends React.Component {
  render() {
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar/>
        <TeslaNotice/>
      </form>
    )
  }
}
export default TeslaBattery;