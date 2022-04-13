import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import NavBar from './NavBar';
import ArticlesContainer from './ArticlesContainer';
import { Route, Switch } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';
import fetchArticles from './apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetchArticles()
    .then(data => this.setState({articles: data.results}))
  }

  render() {
    {console.log("hey hey", this.state.articles)}
    return (
      <main className="App">
        <NavBar />
        Hello Friends!
        <Route exact path="/" <ArticlesContainer articles={this.state.articles}/>
        <ArticleDetails articles={this.state.articles} />
      </main>
    );
  }
}

export default App;
