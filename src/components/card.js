import axios from "axios";
const Card = (article) => {
  const card = document.createElement('card');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');
  const id = document.createElement('id');
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  id.classList.add(article.id)
  img.src = article.authorPhoto;
  headline.textContent = article.headline;
  span.textContent = `By ${article.authorName}`;
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(span);
  card.appendChild(id); 
  card.addEventListener('click', () => {
   console.log(headline);
  })
  return card;
  }
  

const cardAppender = (selector) => {
  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {
    const select = document.querySelector(selector);
    const arrayArticles = res.data.articles;
    const javascript = arrayArticles.javascript;
    const bootstrap = arrayArticles.bootstrap;
    const technology = arrayArticles.technology;
    const jquery = arrayArticles.jquery;
    const node = arrayArticles.node;

    const take = document.querySelector('.cards-container');
    console.log(take)
    javascript.forEach(item =>{
      item.id =('javascript');
      select.appendChild(Card(item))

    })
    bootstrap.forEach(item =>{
      item.id =('bootstrap');
      select.appendChild(Card(item))
    })
    technology.forEach(item =>{
      item.id =('technology');
      select.appendChild(Card(item))
    })
    jquery.forEach(item =>{
      item.id =('jquery');
      select.appendChild(Card(item))
    })
    node.forEach(item =>{
      item.id =('node');
      select.appendChild(Card(item))
    })
  })
  .catch(err =>{
    console.log(err);
  })
}

export { Card, cardAppender }