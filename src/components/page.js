import React, { Component } from 'react'
import Character from '../components/character'

class Page extends Component {
  componentDidMount() {
    this.props.getCharacters()
  }



  render() {
    let { displayedCharacters, isFetched, error } = this.props;

    let characters = displayedCharacters.map(character => {
      return (
        <li className="char_item" key={character.name}>
          <Character character={character} />
        </li>
      )
    });

    return (
      <div className="page">
        {error && <div className="page__error">{error}</div>}
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul className="characters">{characters}</ul>
        )}
      </div>
    )
  }
}

export default Page
