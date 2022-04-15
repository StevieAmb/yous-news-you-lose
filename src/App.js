import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import NavBar from './NavBar';
import ArticlesContainer from './ArticlesContainer';
import { Route, Switch } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';
import fetchArticles from './apiCalls';
import FilteredArticles from './FilteredArticles';

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      filteredArticles: []
    }
  }

  findArticles = (userInput) => {
    console.log("see", userInput.category)
    let searched = userInput.category.toLowerCase()
    let searchedArticles = this.state.articles.filter(article => {
      let title = article.title.toLowerCase()
      if(title.includes(searched)) {
        return article
      }
    })
    this.setState({filteredArticles: searchedArticles})
  }

  componentDidMount() {
    fetchArticles()
    .then(data => this.setState({articles: data.results}))
  }

  showDetails = (id) => {
    const detail = this.state.articles.find(article => article["created_date"] === id)
    console.log("boom", detail)
    if(detail) {
      return <ArticleDetails details={detail} />
    }
  }

  render() {
    {console.log("hey hey", this.state.filteredArticles)}
    return (
      <>
        <NavBar findArt={this.findArticles}/>
      <main className="App">
        <Route exact path="/" render={() => <ArticlesContainer articles={this.state.articles} />}></Route>
        <Route exact path="/article/:id" render={({match}) => {
          return this.showDetails(match.params.id)
        }
      }></Route>
      <Route exact path="/searched" render={() => <FilteredArticles filtered={this.state.filteredArticles} />}></Route>
        {/* <Route exact path="/searched" render={() => console.log('hello')}></Route> */}
      </main>  
      </>
    );
  }
}

export default App;
