import React, {Component, Fragment} from 'react';
import Header from "../Presentational/Header";
import Presentation from "../Presentational/Presentation";
import WhatWeDo from "../Presentational/WhatWeDo";
import Careers from "../Presentational/Careers";
import ContactUs from "../Presentational/ContactUs";

export default class Landing extends Component {
  componentDidMount() {
  }

  render() {
    return (
        <Fragment>
          <Header/>
          <Presentation/>
          <WhatWeDo/>
          <Careers/>
          <ContactUs/>
        </Fragment>
    );
  }
}