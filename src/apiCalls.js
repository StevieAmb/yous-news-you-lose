
const fetchArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_API_KEY}`)
  .then(response => response.json())
}

export default fetchArticles;