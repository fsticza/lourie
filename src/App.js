import React, { Component } from 'react'
import Section from './components/Section'
import Navigation from './components/Navigation'

import smoothScrollTo from './lib/smoothScrollTo'
import 'intersection-observer'

import './assets/sass/app.css'
import phoneUrl from './assets/img/phone.png'
import bag4Url from './assets/img/drag-bag.png'
import deviceUrl from './assets/img/lourie-tech-device.png'

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: [0, 0.01, 0.02, 0.03, 0.04, 0.05]
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSection: 1,
      isScrolling: false
    }
    this.handleNavClick = this.handleNavClick.bind(this)
    this.intersectionCallback = this.intersectionCallback.bind(this)
  }

  componentDidMount() {
    // no controls - no animation required
    if (document.body.offsetWidth < 750) {
      return
    }
    Array.from(new Array(6),(val,index)=>index+1).forEach(idx => {
      new IntersectionObserver(this.intersectionCallback, observerOptions)
        .observe(document.querySelector(`#section-${idx}`))
    })
  }

  intersectionCallback = entries => {
    if (this.state.isScrolling) {
      return
    }
    entries.forEach(entry => {
      let box = entry.target;
      let visiblePct = entry.intersectionRatio * 100
      let index = Array.prototype.indexOf.call(box.parentNode.childNodes, box)

      if (visiblePct > 1 && this.state.activeSection !== index) {
        this.setPosition(index)
      }
    })
  }

  handleNavClick(ev, sectionNum) {
    ev.preventDefault();
    this.setPosition(sectionNum)
  }

  setPosition (sectionNum) {
    this.setState(prevState => ({
      isScrolling: true
    }))
    smoothScrollTo(document.getElementById(`section-${sectionNum}`), 200, 'linear', () => {
      this.setState(prevState => ({
        activeSection: sectionNum,
        isScrolling: false
      }))
    })
  }

  render() {
    const activeIdx = this.state.activeSection
    return (
      <section className="section-wrapper">
        <Navigation
          activeIdx={activeIdx}
          handleNavClick={this.handleNavClick} >
        </Navigation>
        <Section id="section-1">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <h1 className="section-title">
                These are ordinaray backpacks,
                but Lourie makes them all
                smart and secure
              </h1>
            </div>
          </div>
        </Section>

        <Section id="section-2">
          <div className="row text-right text-md-left align-items-center">
            <div className="col-md-4 order-md-2">
              <h1 className="section-title">
                Lourie, the vigilant technology for your backpack
              </h1>
            </div>
            <div className="col-md-5 offset-md-2 order-md-1">
              <div className="px-4">
                <img className="img-fluid" src={bag4Url} alt="Laurie Tech bag #4"/>
              </div>
            </div>
          </div>
        </Section>

        <Section id="section-3">
          <div className="row text-center text-md-left align-items-center">
            <div className="col-md-4 order-md-2">
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
            <div className="col-md-4 offset-md-3 order-md-1">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item"
                  title="Video about Lourie Tech"
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </Section>

        <Section id="section-4">
          <div className="row align-items-center">
            <div className="col-md-5 offset-md-1">
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
            <div className="col-md-5 text-center">
              <img className="inline-img" src={deviceUrl} alt="Laurie Tech Device" />
            </div>
          </div>
        </Section>

        <Section id="section-5">
          <div className="row text-right text-md-center align-items-center">
            <div className="col-md-10 offset-md-1">
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

        <Section id="section-6">
          <div className="row text-center text-md-left align-items-center">
            <div className="col-md-6 offset-md-1">
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
            <div className="col-md-4 text-center">
              <img className="img-fluid" src={phoneUrl} alt="Laurie Tech phone" />
            </div>
          </div>
        </Section>

      </section>
    );
  }
}

export default App;
