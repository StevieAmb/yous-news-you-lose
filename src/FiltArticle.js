import React from 'react';
import { NavLink } from 'react-router-dom';

 const FiltArticle = ({id, title, img, abstract}) => {
  return (
    <article>
      <h3>{title}</h3>
      <img src={img}/>
      <p className='abstract'>{abstract}</p>
      <NavLink to={`/article/${id}`}>
      <button>More Details Here</button>
      </NavLink>
    </article>
  )
 }


export default FiltArticle;