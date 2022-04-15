import React from 'react';
import './ArticleDetails.css';
import { NavLink } from 'react-router-dom';

const ArticleDetails = ({details}) => {
  console.log('here we go', details)
  return (
    <section className='article-details'>
      <img src={details.multimedia[2].url} alt={details.title} />
      <h3>Written {details.byline}</h3>
      <p>See Full Article <a href={details.url}>Here</a></p>
      <NavLink to="/">
      <button>Go Back Home</button>
      </NavLink>
    </section>
  )
}


export default ArticleDetails;