import React from 'react';
import { Component } from 'react/cjs/react.production.min';

class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      category: ''
    }
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
        This is the navigation bar!
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
        <button>Find Some Articles</button>
      </nav>
    )
  }
}


export default NavBar;