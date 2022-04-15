import React from 'react';
import { NavLink } from 'react-router-dom';
import FiltArticle from './FiltArticle';

const FilteredArticles = ({filtered}) => {
  console.log("hello", filtered)
  if(filtered.length) {
    let allFilteredArticles = filtered.map(filteredArticle => {
      return (
        <FiltArticle 
          key={filteredArticle["created_date"]}
          id={filteredArticle["created_date"]}
          title={filteredArticle.title}
          img={filteredArticle.multimedia[1].url}
          abstract={filteredArticle.abstract}
          />
      )
    })
    return (
      <section className="front-page-articles">
        {allFilteredArticles}
        {console.log("all", allFilteredArticles)}
      </section>
    )

  } else {
    return (
      <section>
    <p>Sorry, can't find anything based on your search!</p>
    <NavLink to="/">
      <button className='return-home'>Go Back Home</button>
    </NavLink>
      </section>
    )
  }
}
  

export default FilteredArticles;