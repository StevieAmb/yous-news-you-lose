import React from 'react';

const Article = ({title, img, abstract}) => {
  return (
    <article>
      <h3>{title}</h3>
      <img src={img}/>
      <p>{abstract}</p>
      <button>More Details Here</button>
    </article>
  )
}


export default Article;