import React from 'react';
import { NavLink } from 'react-router-dom';
import './Article.css';

const Article = ({id, title, img, abstract}) => {
  return (
    <article className='article-card'>
      <h3>{title}</h3>
      <img src={img}/>
      <p>{abstract}</p>
      <NavLink to={`/article/${id}`}>
      <button className='details-button'>More Details Here</button>
      </NavLink>
    </article>
  )
}


export default Article;