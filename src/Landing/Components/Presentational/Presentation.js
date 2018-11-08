import React, {Component} from 'react';
import figure1 from '../../../images/figure1.png';
import figure2 from '../../../images/figure2.png';
import devices from '../../../images/devices.png';
// import { particleConfig } from '../../../particlesConfig'

export default class Presentation extends Component {

  componentDidMount() {
    // window.particlesJS('particles-js', particleConfig);
  }

  render() {
    // <div className="w-100 position-absolute" id="particles-js"></div>
    return (
        <div id="presentation" className="d-flex flex-wrap pb-4 pb-md-5">
          <div className="pl-0 col-12 col-sm-7 col-lg-6">
            <img className="img-fluid" src={figure1} alt=""/>
            <div className="presentation-mobile-business-text">
              <h1>Big Data Engineering & Cloud Native Solutions</h1>
            </div>
          </div>
          <div className="pr-0 col-12 col-sm-7 ml-auto col-lg-6">
            <div className="combined-images-presentation">
              <img className="img-fluid" src={figure2} alt=""/>
              <img className="img-fluid" src={devices} alt=""/>
            </div>
          </div>
        </div>
    );
  }
}