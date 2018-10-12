import React from 'react';

export default class Pet extends React.Component {
  render() {
    console.log(this.props.animalInfo.imageURL);
    console.log(typeof this.props.animalInfo.imageURL);
    return (
      <section className='animalToAdopt'>
          <header>
            <h2>
              {this.props.animalInfo.name}
            </h2>
            <img src={this.props.animalInfo.imageURL} alt={this.props.animalInfo.imageDescription}/>
          </header>
          <main>
            <dl>
              <dt>Sex:</dt>
              <dd>{this.props.animalInfo.sex}</dd>
              <dt>Age:</dt>
              <dd>{this.props.animalInfo.age}</dd>
              <dt>Breed:</dt>
              <dd>{this.props.animalInfo.breed}</dd>
              <dt>Story:</dt>
              <dd>{this.props.animalInfo.story}</dd>
            </dl>
            <button 
              type='button' 
              name='adopt' 
              onClick={this.props.onAdoptPet}>
              Adopt</button>
          </main>
        </section>
    )
  }
}