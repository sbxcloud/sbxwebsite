import React, {Component} from 'react';
import Header from "../Presentational/Header";
import Presentation from "../Presentational/Presentation";
import WhatWeDo from "../Presentational/WhatWeDo";

export default class Landing extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Header/>
        <Presentation/>
        <WhatWeDo/>
      </div>
    );
  }
}