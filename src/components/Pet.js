import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdopt = e => {
    return this.props.onAdoptPet(this.props.pet.id)
  }
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name (gender: ♂ or ♀)</a>
          <div className="meta">
            <span className="date">Pet type</span>
          </div>
          <div className="description">
            <p>Age: </p>
            <p>Weight: </p>
          </div>
        </div>
        <div className="extra content">
        {!this.props.isAdopted ?
          <button className="ui primary button">Adopt pet</button>
          :
          <button className="ui disabled button">Already adopted</button>
        }
        </div>
      </div>
    );
  }
}

export default Pet;
