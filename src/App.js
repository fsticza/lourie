import React, { Component } from 'react'
import Section from './components/Section'

import smoothScrollTo from './lib/smoothScrollTo'

import './assets/sass/app.css'
import sprite from './assets/img/svg/sprite.svg'
import phoneUrl from './assets/img/phone.png'
import bag4Url from './assets/img/drag-bag.png'
import deviceUrl from './assets/img/lourie-tech-device.png'
import audioUrl from './assets/audio/goaway.mp3'


class App extends Component {
  constructor(props) {
    super(props)
    this.handleNavClick = this.handleNavClick.bind(this)
    this.handleDragStart = this.handleDragStart.bind(this)
  }

  handleNavClick(ev, sectionNum) {
    ev.preventDefault();
    this.setPosition(sectionNum)
  }

  handleDragStart (ev) {
    document.getElementById('goaway').play()
  }

  setPosition (sectionNum) {
    smoothScrollTo(document.getElementById(`section-${sectionNum}`))
  }

  render() {
    return (
      <section className="section-wrapper">
        <Section idx={0} handleNavClick={this.handleNavClick}>
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-12 offset-lg-0">
              <h1 className="section-title">
                These are ordinaray backpacks,
                but Lourie makes them all
                smart and secure
              </h1>
            </div>
          </div>
        </Section>

        <Section idx={1} handleNavClick={this.handleNavClick}>
          <div className="row text-right text-md-left align-items-center">
            <div className="col-md-4 col-lg-6 order-md-2">
              <h1 className="section-title">
                Lourie, the vigilant technology for your backpack
              </h1>
            </div>
            <div className="col-md-5 offset-md-2 col-lg-6 offset-lg-0 order-md-1">
              <div className="px-4">
                <img className="img-fluid" onDragStart={this.handleDragStart}
                  style={{zIndex: 10, position: 'relative'}}
                  draggable="true" src={bag4Url} alt="Laurie Tech bag #4"/>
              </div>
            </div>
          </div>
        </Section>

        <Section idx={2} handleNavClick={this.handleNavClick}>
          <div className="row text-center text-md-left align-items-center">
            <div className="col-md-4 col-lg-6 order-md-2">
              <h1 className="section-title">
                Story
              </h1>
              <p className="section-description">
                Lourie, aka the “go-away-bird” shouts out when  when dangerous creatures get too close.
                Lourie technology has been developed based on the same principle, especially designed for tourists and
                urban travelers. While enjoying the city’s vibrant atmosphere one gets easily distracted but Lourie
                remains vigilant under all circumstances.
              </p>
            </div>
            <div className="col-md-4 offset-md-3 col-lg-5 offset-lg-1 order-md-1">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item"
                  title="Video about Lourie Tech"
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </Section>

        <Section idx={3} handleNavClick={this.handleNavClick}>
          <div className="row align-items-center">
            <div className="col-md-5 offset-md-1 col-lg-6 offset-lg-0">
              <h1 className="section-title">
                Lourie is the leading technology which alerts you whenever your bag is in danger.
              </h1>
              <p className="section-description">
                Lourie technology has been developed for tourists and urban travellers.
                Lourie turns any ordinary bag into a smart and vigilant travel companion. Lourie alerts the
                user before its bag is opened or moved. Lourie activates the built in alarm device and in the
                same time sends an alert to the user’s mobile phone. Lourie monitors the distance between the
                bag and the phone and reminds the user if any of the two is left behind.
              </p>
            </div>
            <div className="col-md-5 col-lg-6 text-center">
              <img className="img-fluid inline-img" src={deviceUrl} alt="Laurie Tech Device" />
            </div>
          </div>
        </Section>

        <Section idx={4} handleNavClick={this.handleNavClick}>
          <div className="row text-right text-md-center align-items-center">
            <div className="col-md-8 offset-md-2">
              <svg className="bird-vector" alt="Lourie Tech bird">
                <use xlinkHref={`${sprite}#bird`}></use>
              </svg>
              <h1 className="section-title">
                Loosing valuables abraod can spoil the whole holiday. Lourie makes your
                backpack vigilant to protect the user’s belongings all the time.
              </h1>
              <p className="section-description">
                Lourie makes your bag vigilant. The integration of the Lourie technology in your
                backpack’s design offers the user alarm and notification options in various situation. Lourie
                has been developed for tourists and urban travellers, who like to enjoy vibrant big city life.
                They are the typical victims of pickpocket. Lourie alerts the user right before the bag gets opened.
                The alarm is also activated when the bag is moved or taken away from the owner.
              </p>
            </div>
          </div>
        </Section>

        <Section idx={5} handleNavClick={this.handleNavClick}>
          <div className="row text-center text-md-left align-items-center">
            <div className="col-md-6 offset-md-1 offset-lg-0">
              <h1 className="section-title">
                Lourie turns ordinary backpacks into indispensable travel companions. The smart bag
                stays constantly in touch with the user’s smart phone
              </h1>
              <p className="section-description">
                Lourie app is freely available for iOs and Android. Alerts and notifications can be managed
                in seconds through the user’s mobile phone. As the bag and the phone are communicating, Lourie helps you
                to keep both with you. The smart technology has been developed to enable the integration of further functions,
                such as gps tracking of the bag, or magnetic closure.  Lourie technology integrates easily in any backpack’s design
              </p>
            </div>
            <div className="col-md-4 col-lg-6 text-center">
              <img className="img-fluid" src={phoneUrl} alt="Laurie Tech phone" />
            </div>
          </div>
        </Section>
        <audio id="goaway">
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      </section>

    );
  }
}

export default App;
