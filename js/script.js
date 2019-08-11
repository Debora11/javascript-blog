/*
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
  */
 const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');


  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);
  
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('a.active');

  for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}


  /* get 'href' attribute from the clicked link */
  const articleSelector = function getAttribute(){
    clickedElement('href');
  } 

  console.log('articleSelector');

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector('href');

  console.log('targetArticle');

  /* add class 'active' to the correct article */
  const targetArticle = document.querySelector('active');

  console.log('targetArticle');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}