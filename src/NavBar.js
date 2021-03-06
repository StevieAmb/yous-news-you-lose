import React from 'react';
import { Link } from 'react-router-dom';
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
          Search by Title:
        </label>
        <input
            type="text"
            name="category-search"
            id="categorySearch"
            placeholder="music, ballet, tv shows"
            value={this.state.category}
            onChange={e => this.handleChange(e)}
            required
        />
        <Link to="/searched">
          <button className='search-button' onClick={e => this.submitSearch(e)}>Find Some Articles</button>
        </Link>
        </div>
      </nav>
    )
  }
}


export default NavBar;