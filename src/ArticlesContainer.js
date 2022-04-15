import React from 'react';
import Article from './Article';
import './ArticlesContainer.css';

const ArticlesContainer = ({articles}) => {
  let allArticles = articles.map(article => {
    return (
      <Article 
        id={article["created_date"]}
        title={article.title}
        img={article.multimedia[1].url}
        abstract={article.abstract}
        />
    )
  })
  return (
    <section className="front-page-articles">
      {allArticles}
    </section>
  )
}

export default ArticlesContainer; 