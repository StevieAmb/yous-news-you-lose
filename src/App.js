import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import NavBar from './NavBar';
import ArticlesContainer from './ArticlesContainer';
import { Route, Switch } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <main className="App">
        <NavBar />
        Hello Friends!
        <ArticlesContainer/>
        <ArticleDetails />
      </main>
    );
  }
}

export default App;
