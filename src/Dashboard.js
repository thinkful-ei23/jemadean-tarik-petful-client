import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Petful</h1>
        <section className='catToAdopt'>
          <header>
            <h2>
              {this.props.catToAdopt[0].name}
            </h2>
            <img src={this.props.catToAdopt[0].imageURL} alt={this.props.catToAdopt[0].imageDescription}/>
          </header>
          <main>
            <dl>
              <dt>Sex:</dt>
              <dd>{this.props.catToAdopt[0].sex}</dd>
              <dt>Age:</dt>
              <dd>{this.props.catToAdopt[0].age}</dd>
              <dt>Breed:</dt>
              <dd>{this.props.catToAdopt[0].breed}</dd>
              <dt>Story:</dt>
              <dd>{this.props.catToAdopt[0].story}</dd>
            </dl>
            <button type='button' name='adopt-cat'>Adopt</button>
          </main>
        </section>
        <section className='dogToAdopt'>
          <header>
          <h2>
              {this.props.dogToAdopt[0].name}
            </h2>
            <img src={this.props.dogToAdopt[0].imageURL} alt={this.props.dogToAdopt[0].imageDescription}/>
          </header>
          <main>
            <dl>
              <dt>Sex:</dt>
              <dd>{this.props.dogToAdopt[0].sex}</dd>
              <dt>Age:</dt>
              <dd>{this.props.dogToAdopt[0].age}</dd>
              <dt>Breed:</dt>
              <dd>{this.props.dogToAdopt[0].breed}</dd>
              <dt>Story:</dt>
              <dd>{this.props.dogToAdopt[0].story}</dd>
            </dl>
            <button type='button' name='adopt-dog'>Adopt</button>
          </main>
        </section>
      </section>
    )
  }
}