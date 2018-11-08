import React, {Component} from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import $ from 'jquery';
import toast from '../../../iziToastService';

import sbx from '../../../images/sbx.png';
import hiring from '../../../images/hiring.png';
import linkedin from '../../../images/linkedin.png';
import twitter from '../../../images/twitter.png';
import github from '../../../images/github.png';
import slack from '../../../images/slack.png';
import skype from '../../../images/skype.png';


export default class ContactUs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hello: 'We are looking forward to hear from you, please fill the following form to ask us anything.',
      jobs: [
        {
          id: 1,
          text: 'Front-end developer',
          href: 'mailto:box@socobox.co?subject=Front-end developer'
        },
        {
          id: 2,
          text: 'Back-end developer',
          href: 'mailto:box@socobox.co?subject=Back-end developer'
        },
        {
          id: 3,
          text: 'Blockchain Developer',
          href: 'mailto:box@socobox.co?subject=Blockchain developer'
        }
      ],
      social: [
        {img: linkedin, href: 'https://www.linkedin.com/company/socobox/', alt: 'linkedin'},
        {img: twitter, href: 'https://twitter.com/socobox', alt: 'twitter'},
        {img: github, href: 'https://github.com/sbxcloud', alt: 'github'},
        {img: slack, href: 'http://sbxcloud.herokuapp.com/', alt: 'slack'},
        {img: skype, href: 'skype:hancho.ospina?chat', alt: 'skype'}
      ],
      name: '',
      email: '',
      country: '',
      message: '',
      loading: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.name) return toast("error", {message: "Please Enter a Name"});
    if (!this.state.email) return toast("error", {message: "Please Enter a Email"});
    if (!this.state.country) return toast("error", {message: "Please Enter a Country"});
    if (!this.state.message) return toast("error", {message: "Please Enter a Message"});

    var body = {
      key: "4476F2D9-0D5E-475B-B366-EFACE04656A7",
      params: {
        name: this.state.name,
        email: this.state.email,
        country: this.state.country,
        message: this.state.message
      },
    };

    this.setState({loading: true});

    return $.ajax({
      contentType: "application/json",
      url: "https://sbxcloud.com/api/cloudscript/v1/run",
      type: "post",
      dataType: "json",
      data: JSON.stringify(body),
      success: (data) => {
        console.log(data);
        this.setState({loading: false});
        if(data.success) {
          if(data.response.body.success) {
            toast("success", {message: data.response.body.message});
          } else {
            toast("success", {message: data.response.body.err});
          }
        } else {
          toast("error", {message: data.error});
        }
      }
    });
  }

  componentDidMount() {
  }

  render() {
    return (
        <div id="contactUs" className="container text-white">
          <div className="row mb-5">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <h1 className="font-weight-bold">Say Hello!</h1>
              <p>{this.state.hello}</p>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Input type="text" name="country" placeholder="Country" value={this.state.country} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Input type="textarea" name="message" placeholder="Message" value={this.state.message} onChange={this.handleInputChange} />
                </FormGroup>
                <button className="btn-contact-send" type="submit" disabled={this.state.loading}>SEND</button>
              </Form>
            </div>
            <div className="col-12 col-lg-6">
              <div className="text-center">
                <img className="hiring-img mb-4" src={hiring} alt=""/>
              </div>
              <div className="row mb-4">
                {this.state.jobs.map(job => (
                    <div key={job.id} className="col-12">
                      <div className="card card-hiring my-1">
                        <div className="p-3 d-flex justify-content-between align-items-center text-center">
                          <p className="m-0">{job.text}</p>
                          <a href={job.href} className="hiring-apply-btn">Apply</a>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
              <div className="row align-items-center text-center">
                <div className="col-5 col-md-4">
                  <h4 className="font-weight-bold">Follow Us</h4>
                </div>
                <div className="col-7 col-md-8">
                  {this.state.social.map(item => (
                      <a key={item.alt} href={item.href} target="_blank" rel="noopener noreferrer">
                        <img className="m-1" src={item.img} alt={item.alt}/>
                      </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 text-center sbx-footer">
              <p>Copyright © SOCOBOX SAS. All Rights Reserved.</p>
              <p><a href="mailto:box@socobox.co">box@socobox.co</a> | <a href="tel:+573006666666">+57 300 666 6666</a></p>
              <p><a href="https://www.google.com/maps/search/?api=1&query=11.0112064,-74.8348898" target="_blank" rel="noopener noreferrer">Calle 102 #49E 12, Int 6A, Barranquilla, ATL 080020, Colombia</a></p>
              <p><a href="/privacy_policy.pdf" download>Privacy Policy</a></p>
              <img src={sbx} alt="sbx"/>
            </div>
          </div>
        </div>
    );
  }
}
