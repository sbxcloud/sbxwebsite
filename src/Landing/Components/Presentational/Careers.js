import React, {Component} from 'react';
import exp1 from '../../../images/expertize/terraform.png';
import exp2 from '../../../images/expertize/spring.png';
import exp3 from '../../../images/expertize/spark.png';
import exp4 from '../../../images/expertize/scala.png';
import exp5 from '../../../images/expertize/lucene.png';
import exp6 from '../../../images/expertize/kafka.png';
import exp7 from '../../../images/expertize/jenkins-docker.png';
import exp8 from '../../../images/expertize/elasticsearch.png';
import exp9 from '../../../images/expertize/datastax.png';
import exp10 from '../../../images/expertize/cassandra.png';
import exp11 from '../../../images/expertize/azure.png';
import exp12 from '../../../images/expertize/aws.png';
import exp13 from '../../../images/expertize/akka.png';
import exp14 from '../../../images/expertize/front.png';

export default class Careers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      images: [
        {img: exp1, alt: 'terraform'},
        {img: exp2, alt: 'spring'},
        {img: exp3, alt: 'spark'},
        {img: exp4, alt: 'scala'},
        {img: exp5, alt: 'lucene apache solr'},
        {img: exp6, alt: 'kafka'},
        {img: exp7, alt: 'jenkins-docker'},
        {img: exp8, alt: 'elasticsearch'},
        {img: exp9, alt: 'datastax'},
        {img: exp10, alt: 'cassandra'},
        {img: exp11, alt: 'azure'},
        {img: exp12, alt: 'amazon web services'},
        {img: exp13, alt: 'akka'},
        {img: exp14, alt: 'angular react veu'}
      ].map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1]),
      expertize: 'By leveraging the power of distributed architectures, we focus on the latest technologies and methodologies to help you build: Reactive Applications, Data Streaming/Analytics/Machine Learning, Hybrid Cloud  Deployments and Cluster/Containers Infrastructure.',
    }
  }

  componentDidMount() {
  }

  render() {
    return (
        <div id="careers" className="container py-4 py-md-5 bg-figure3 bg-figure4">
          <div className="row pb-4 pb-md-5 justify-content-center">
            <div className="col-lg-8 col-12 text-center">
              <h3 className="expertize-header">
                What we Do
              </h3>
              <p className="subheader">
                {this.state.expertize}
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {this.state.images.map(item => (
                <div key={item.alt} className="col expertize-item">
                  <img src={item.img} alt={item.alt}/>
                </div>
            ))}
          </div>
        </div>
    );
  }
}