import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import Fact from '../components/fact';
import Organisation from '../components/organisation';
class DisorderInfo extends React.Component {

  componentDidMount()
  {
    ReactDom.findDOMNode(this).scrollIntoView();
  }

  render()
  {
    return (
        <div className="main-content">

            <div className="container">
              <section className="info-section">
                <div className="row">
                  <h1 className="section-title col-12">{this.props.match.params.disorder}</h1>
                  <p className=" col-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </section>
            </div>



            <div className="container">
            <section className="info-section">
              <div className="row">
                <h1 className="section-title col-12">Facts</h1>
                <Fact number="1" fact="Mental health and behavioural problems (e.g. depression, anxiety and drug use) are reported to be the primary drivers of disability worldwide, causing over 40 million years of disability in 20 to 29-year-olds."/>
                <Fact number="2" fact="4-10% of people in England will experience depression in their lifetime"/>
                <Fact number="3" fact="Mixed anxiety and depression has been estimated to cause one fifth of days lost from work in Britain"/>
                <Fact number="4" fact="One adult in six had a common mental disorder."/>
                <Fact number="5" fact="it is estimated that the number of people living with dementia worldwide was 44 million, and this was predicted to double by 2030."/>
              </div>
            </section>
            </div>

            <div className="container">
            <section className="info-section">
              <div className="row">
                <h1 className="section-title col-12">Organisations</h1>
                <Organisation website="https://www.mentalhealth.org.uk/" name="Mental Health Foundation" contact="020 7803 1101" excerpt="Improving the lives of those with mental health problems or learning difficulties." />
                <Organisation  website="https://www.mentalhealth.org.uk/" name="Together" contact="020 7780 7300" excerpt="Supports people through mental health services." />
                <Organisation  website="https://www.mentalhealth.org.uk/" name="The Centre for Mental Health" contact="0845 123 2320" excerpt="Working to improve the quality of life for people with mental health problems." />
                <Organisation  website="https://www.mentalhealth.org.uk/" name="Depression Alliance" contact="020 7803 1101" excerpt="Improving the lives of those with mental health problems or learning difficulties." />
                <Organisation  website="https://www.mentalhealth.org.uk/" name="BACP Find a Therapist Directory" contact="01455 883300" excerpt="Through the British Association for Counselling & Psychotherapy (BACP) you can find out more about counselling services in your area." />
                <Organisation  website="https://www.mentalhealth.org.uk/" name="PANDAS Foundation" contact="0843 28 98 401 (every day from 9am-8pm)" excerpt="PANDAS Foundation vision is to support every individual with pre (antenatal), postnatal depression or postnatal psychosis in England, Wales and Scotland. We campaign to raise awareness and remove the stigma. We provide our PANDAS Help Line, Support Groups offer online advice to all and much more. " />
              </div>
            </section>
            </div>

        </div>



    )
  }
}

module.exports = DisorderInfo;
