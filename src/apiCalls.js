const fetchArticles = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=1Qzvpl0KwcglnxxeAwe5oNNZMwjTADYj')
  .then(response => response.json())
}

export default fetchArticles;