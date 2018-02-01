import React, { Component } from 'react'
import './assets/sass/app.css'
import Page from './components/Page'
import NavigationLink from './components/NavigationLink'
import smoothScrollTo from './lib/smoothScrollTo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {activePage: 1}

    this.handleNavClick = this.handleNavClick.bind(this)
  }

  componentDidMount() {
    smoothScrollTo(document.getElementById('page-1'))
  }

  handleNavClick(ev, pageNum) {
    ev.preventDefault();
    this.setState(prevState => ({
      activePage: pageNum
    }));
    smoothScrollTo(document.getElementById(`page-${pageNum}`))
  }

  render() {
    const activeIdx = this.state.activePage
    return (
      <section className="page-wrapper">

        <nav className="navigation">
          {
            Array.from(new Array(6),(val,index)=>index+1).map(idx => {
              return <NavigationLink
                idx={idx}
                key={idx}
                activeIdx={activeIdx}
                handleNavClick={this.handleNavClick} />
            })
          }
        </nav>

        <Page id="page-1" title="These are ordinaray backpacks,
              but Lourie makes them all
              smart and secure">
        </Page>

        <Page id="page-2" title="Lourie, the vigilant technology for your backpack">
        </Page>

        <Page id="page-3"
          title="Story"
          description="Lourie, aka the “go-away-bird” shouts out when  when dangerous creatures get too close.
          Lourie technology has been developed based on the same principle, especially designed for tourists and
          urban travelers. While enjoying the city’s vibrant atmosphere one gets easily distracted but Lourie
          remains vigilant under all circumstances.">
        </Page>

        <Page id="page-4"
          title="Lourie is the leading technology which alerts you whenever your bag is in danger."
          description="Lourie technology has been developed for tourists and urban travellers.
          Lourie turns any ordinary bag into a smart and vigilant travel companion. Lourie alerts the
          user before its bag is opened or moved. Lourie activates the built in alarm device and in the
          same time sends an alert to the user’s mobile phone. Lourie monitors the distance between the
          bag and the phone and reminds the user if any of the two is left behind.">
        </Page>

        <Page id="page-5"
          title="Loosing valuables abraod can spoil the whole holiday. Lourie makes your
          backpack vigilant to protect the user’s belongings all the time."
          description="Lourie makes your bag vigilant. The integration of the Lourie technology in your
          backpack’s design offers the user alarm and notification options in various situation. Lourie
          has been developed for tourists and urban travellers, who like to enjoy vibrant big city life.
          They are the typical victims of pickpocket. Lourie alerts the user right before the bag gets opened.
          The alarm is also activated when the bag is moved or taken away from the owner.">
        </Page>

        <Page id="page-6"
          title="Lourie turns ordinary backpacks into indispensable travel companions. The smart bag
          stays constantly in touch with the user’s smart phone"
          description="Lourie app is freely available for iOs and Android. Alerts and notifications can be managed
          in seconds through the user’s mobile phone. As the bag and the phone are communicating, Lourie helps you
          to keep both with you. The smart technology has been developed to enable the integration of further functions,
          such as gps tracking of the bag, or magnetic closure.  Lourie technology integrates easily in any backpack’s design">
        </Page>

      </section>
    );
  }
}

export default App;
