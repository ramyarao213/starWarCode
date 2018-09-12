import React, { Component } from 'react'
import Modal from './Modal';

class Character extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
    const { character } = this.props;
        let characterDetails = Object.keys(character).map(function(key, index) {
            return (
                <div className='display-element'>
                    {key}: {character[key]}
                </div>
            )
        });

    return (
      <div className="character" onClick={this.toggleModal}>
          <p className="character_name" >{character.name}</p>
          <button className="button-display" >
              more details....
          </button>
          <Modal show={this.state.isOpen}
                 onClose={this.toggleModal}>
              <div className="display-content">
                  {characterDetails}
              </div>
          </Modal>

      </div>
    )
  }
}

export default Character
