import React from 'react';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import './TeslaBattery.css';
class TeslaBattery extends React.Component {
  render() {
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaNotice/>
      </form>
    )
  }
}
export default TeslaBattery;