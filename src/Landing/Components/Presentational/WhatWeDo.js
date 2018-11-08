import React, {Component} from 'react';
import do1 from '../../../images/do1.png';
import do2 from '../../../images/do2.png';
import do3 from '../../../images/do3.png';
import do4 from '../../../images/do4.png';

export default class WhatWeDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      whatWeDo: 'We focus on an Events-First and Domain-Driven Design, this allows us to know what happens inside your company, knowing the real status and identifying how the data flows inside it triggering different workflows across the value chain.',
      weDo: [
        {
          image: do1,
          title: 'Business Events Modeling',
          description: 'By focusing on an Events-First and Domain-Driven Design, for that we need pay attention on what happens inside your business. Starting by helping you map the workflow of your business, reviewing the needs and the real status of the company and how the data flows inside it triggering different workflows across the value chain.'
        },
        {
          image: do2,
          title: 'Data Science and Data Engineering',
          description: 'Our team of multidisciplinary experts will help you discover, classify and tune key models that allow you to explore, mine and continuously learn about your customers, your business and your market.'
        },
        {
          image: do3,
          title: 'Distributed Databases and Data Streaming',
          description: 'We are ready to build with you modern applications that require real-time, multi-location scalable databases that can help you store, process, analyze, transform and extract data to constantly evolve with your business.'
        },
        {
          image: do4,
          title: 'Multi-Cloud DevOps',
          description: 'The increasing innovation of cloud services is leading to hybrid and multi-cloud infrastructures that require DevOps teams that need to become more agile and scalable, we will help you master your deployment, monitoring and recovery processes to  keep up with the latest standards.'
        },
      ]
    };
  }

  componentDidMount() {
  }

  render() {
    return (
        <div id="whatWeDo" className="container pt-4 pt-md-5">
          <div className="row pb-4 pb-md-5 justify-content-center">
            <div className="col-lg-8 col-12 text-center">
              <h3 className="we-do-header">
                What we Do
              </h3>
              <p className="subheader">
                {this.state.whatWeDo}
              </p>
            </div>
          </div>
          <div className="row pb-4 pb-md-5">
            {this.state.weDo.map(item => (
                <div key={item.image} className="col-12 col-md-6 col-lg-3">
                  <div className="we-do-item">
                    <img src={item.image} alt=""/>
                    <div className="d-flex flex-column">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
    );
  }
}