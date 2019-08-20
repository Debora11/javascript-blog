/*
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
  */
 'use strict';

 const titleClickHandler = function (event) {
   event.preventDefault();
   const clickedElement = this;
   console.log('Link was clicked!');
   console.log(event);
 
 
   /* [DONE] remove class 'active' from all article links  */
   const activeLinks = document.querySelectorAll('.titles a.active');
 
   for (let activeLink of activeLinks) {
     activeLink.classList.remove('active');
   }
 
   /* [DONE] add class 'active' to the clicked link */
 
   console.log('clickedElement:', clickedElement);
 
   clickedElement.classList.add('active');
 
   /* [DONE] remove class 'active' from all articles */
   const activeArticles = document.querySelectorAll('.post.active');
 
   for (let activeArticle of activeArticles) {
     activeArticle.classList.remove('active');
   }
 
 
   /* get 'href' attribute from the clicked link */
 
   const articleSelector = clickedElement.getAttribute('href');
   console.log('articleSelector', articleSelector);
 
   /* find the correct article using the selector (value of 'href' attribute) */
 
   const targetArticle = document.querySelector(articleSelector);
 
   console.log('targetArticle', targetArticle);
 
   /* add class 'active' to the correct article */
   targetArticle.classList.add('active');
 };
 
 {
   const optArticleSelector = '.post',
     optTitleSelector = '.post-title',
     optTitleListSelector = '.titles',
     optArticleTagsSelector = '.post-tags .list';
     optArticleAuthorSelector = '.post-author';
 
   function clearTitleList() {
     document.querySelector(optTitleListSelector).innerHTML = '';
   }
 
 
   function generateTitleLinks(customSelector = '') {
 
     /* remove contents of titleList */
 
     const titleList = document.querySelector(optTitleListSelector + customSelector);
 
     clearTitleList();
 
     let html = '';
 
     /* for each article */
     const articles = document.querySelectorAll(optArticleSelector);
     console.log(articles);
 
     for (let article of articles) {
       console.log(article);
 
 
     /* get the article id */
     const articleId = article.getAttribute('id');
     console.log('articleId', articleId);
 
     /* find the title element */
     const articleTitle = article.querySelector(optTitleSelector).innerHTML;
 
     /* get the title from the title element */
 
     /* create HTML of the link */
 
     const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
 
     /* insert link into titleList */
     html = html + linkHTML;
   }
 
   titleList.innerHTML = html;
 }
 
   generateTitleLinks();
 }
 
 const links = document.querySelectorAll('.titles a');
 for (let link of links) {
   link.addEventListener('click', titleClickHandler);
   console.log(links);
 }

 function generateTags() {

  /* find all articles DONE: */
  /* START LOOP: for every article DONE: */

	const articles = document.querySelectorAll(optAricleTagsSelector);
    console.log(articles);

  for (let article of optAricleTagsSelector) {
    console.log(article);
  
  }
  /* find tags wrapper DONE */

  const titleList = article.querySelector(optArticleTagsSelector);

  /* make html variable with empty string DONE */

  let html = '';

  /* get tags from data-tags attribute DONE */

  const articleTags = article.getAttribute('data-tags');

  console.log('articleTags', articleTags);

  /* split tags into array DONE */

  const articleTagsArray = articleTags.split(' ');

  console.log(articleTagsArray);
  
  /* for each tag */
  for (let tag of articleTagsArray) {
  }

  /* generate HTML of the link */

  const linkHTML = '<li><a href="#tag-' + articleTags + '">' + articleTagsArray + '</a></li>';

  /* add generated code to html variable */
  html = html + linkHTML;
}
/* add links to tags wrapper NOT SURE*/

  linkHTML.classList.add();

/* insert HTML of all the links into the tags wrapper */



{
  function tagClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active NOT SURE THE NAME OF CONST */
    const tag = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link */
    for (let tag of tags) {
      tag.classList.remove('active');
    }
    /* remove class active */
    /* END LOOP: for each active tag link */

    /* find all tag links with "href" attribute equal to the "href" constant */
    tag = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */
    for (let tag of tags) {
      tag.classList.add('active');
    }
    /* add class active */
    /* END LOOP: for each found tag link */

    /* execute function "generateTitleLinks" with article selector as argument */
  }
  generateTitleLinks('[data-tags~="' + tag + '"]');

  function addClickListenersToTags() {
    /* find all links to tags */
     const links = document.querySelectorAll(optArticleTagsSelector);


    /* START LOOP: for each link */
    for (let link of links){
      link.tagClickHandler('click', addClickListenersToTags);
      console.log(links);
    }

    /* add tagClickHandler as event listener for that link */

    /* END LOOP: for each link */
  }

  addClickListenersToTags();
}


 
 






   




