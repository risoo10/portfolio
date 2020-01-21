import React from 'react';
import Navigation from '../components/navigation/navigation';
import Landing from './landing/landing';
import "./index.scss";
import { $lightBackgroundColor } from "../constants"


const navigationWrapperStyles = {
  backgroundColor: $lightBackgroundColor,
}



export default () => <div className="container-fluid" style={{height: '100vh'}}>
  <div className="row" style={{height: '100%'}}>
    <div style={navigationWrapperStyles} className="col-2">
      <Navigation></Navigation>
    </div>
    <div style={{}}>
      <Landing></Landing>
    </div>
  </div>
</div>
