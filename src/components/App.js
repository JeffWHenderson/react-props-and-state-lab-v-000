import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onAdoptPet = pet => {
    this.setState ({adoptedPets: [...this.state.adoptedPets, pet]})
  }

  onFilterChange = type => {
    this.State ({
      filters: {
        ...this.state.filters,
          type: type
      }
    })
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
