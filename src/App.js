import React, { Component } from 'react'
import './assets/sass/app.css'
import Page from './components/Page'

class App extends Component {
  render() {
    return (
      <section className="page-wrapper">

        <nav className="navigation">
          <a className="navigation-link" href="#page-1">1</a>
          <a className="navigation-link" href="#page-2">2</a>
          <a className="navigation-link" href="#page-3">3</a>
          <a className="navigation-link" href="#page-4">4</a>
          <a className="navigation-link" href="#page-5">5</a>
          <a className="navigation-link" href="#page-6">6</a>
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
