import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './NavBar.css'

class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      category: ''
    }
  }

  //I have to submit the word to the app component,
  //And then I have to 

  submitSearch = (e) => {
    e.preventDefault()
    const word = {...this.state}
    this.props.findArt(word)
    this.clearInput()
  }

  clearInput = () => {
    this.setState({category: ''})
  }

  handleChange = (e) => {
    this.setState({category: e.target.value})
  }

  render() {
    return (
      <nav>
        <div className='page-title'>
        The New York Times:
        <p className='catch-phrase'>Yous News, You Lose:</p> Terms of Art
        </div>
        <div className='search-input'>
        <label>
          Search by category:
        </label>
        <input
            type="text"
            name="category-search"
            id="categorySearch"
            placeholder="World, art, US, etc..."
            value={this.state.category}
            onChange={e => this.handleChange(e)}
            required
        />
        <button onClick={e => this.submitSearch(e)}>Find Some Articles</button>
        </div>
      </nav>
    )
  }
}


export default NavBar;