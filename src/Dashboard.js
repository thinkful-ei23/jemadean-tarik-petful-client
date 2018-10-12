import React from 'react';
import {connect} from 'react-redux';
import Pet from './components/Pet';
import { fetchCat, adoptCat } from './actions/cat';
import { fetchDog, adoptDog } from './actions/dog';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  onAdoptCat(){
    console.log('onAdopCat ran');
    this.props.dispatch(adoptCat());
  }

  onAdoptDog(){
    console.log('onAdoptDog ran');
    this.props.dispatch(adoptDog());
  }
  render() {
    if (this.props.catToAdopt && this.props.dogToAdopt) {
      return (
        <section>
          <h1>Petful</h1>
          <Pet 
            animalInfo={this.props.catToAdopt} 
            onAdoptPet={() => this.onAdoptCat()} />
          <Pet 
            animalInfo={this.props.dogToAdopt}
            onAdoptPet={() => this.onAdoptDog()} />
        </section>
      )
    }
    else {
      return (
        <section>
          <h1>Petful</h1>
          <h2>Loading...</h2>
        </section>
      )
    }
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.data,
  dogToAdopt: state.dog.data
})

export default connect(mapStateToProps)(Dashboard);