import React from 'react';
import Pet from './components/Pet';

export default class Dashboard extends React.Component {
  onAdoptPet(){
    console.log("Adopt Pet clicked");
  }
  render() {
    return (
      <section>
        <h1>Petful</h1>
        <Pet 
          animalInfo={this.props.catToAdopt[0]} 
          onAdoptPet={() => this.onAdoptPet()} />
        <Pet 
          animalInfo={this.props.dogToAdopt[0]}
          onAdoptPet={() => this.onAdoptPet()} />
      </section>
    )
  }
}