import React from 'react';
import {connect} from 'react-redux';
import Pet from './components/Pet';
import { fetchCat } from './actions/cat';
import { fetchDog } from './actions/dog';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }
  onAdoptPet(){
    console.log("Adopt Pet clicked");
  }
  render() {
    return (
      <section>
        <h1>Petful</h1>
        <Pet 
          animalInfo={this.props.catToAdopt} 
          onAdoptPet={() => this.onAdoptPet()} />
        <Pet 
          animalInfo={this.props.dogToAdopt}
          onAdoptPet={() => this.onAdoptPet()} />
      </section>
    )
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.data,
  dogToAdopt: state.dog.data
})

export default connect(mapStateToProps)(Dashboard);