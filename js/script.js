'use strict';

const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles',
        optArticleTagsSelector = '.post-tags .list',
        optArticleAuthorSelector = '.post-author',
        optArticleTagsLinkSelector = '.post-tags .list a',
        optTagsListSelector = '.tags.list',

const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('test');

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }


    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
};

function clearTitleList() {
    document.querySelector(optTitleListSelector).innerHTML = '';
}


function generateTitleLinks(customSelector = '') {

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);

    clearTitleList();

    let html = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    for (let article of articles) {

        /* get the article id */
        const articleId = article.getAttribute('id');

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

function generateTags() {
  /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};

    /* find all articles DONE: */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

    /* START LOOP: for every article DONE: */
    for (let article of articles) {

        /* find tags wrapper DONE */
        const tagsList = article.querySelector(optArticleTagsSelector);

        /* make html variable with empty string DONE */
        let html = '';

        /* get tags from data-tags attribute DONE */
        const articleTags = article.getAttribute('data-tags');

        /* split tags into array DONE */
        const articleTagsArray = articleTags.split(' ');
        console.log(articleTagsArray);

        /* for each tag */
        for (let tag of articleTagsArray) {
            /* generate HTML of the link */
            const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

            /* add generated code to html variable */
            html = html + linkHTML;

            /* [NEW] check if this link is NOT already in allTags */
            if(!allTags.hasOwnProperty(tag)){
            /* [NEW] add generated code to allTags object */
            allTags[tag]=1;
            } else {
              allTags[tag]++;
            }

        }
        /* insert HTML of all the links into the tags wrapper */
        tagsList.innerHTML = html;

        /* [NEW] find list of tags in right column */
        const tagList = document.querySelector('.tags');

        /* [NEW] create variable for all links HTML code */
         let allTagsHTML = '';
         /* [NEW] START LOOP: for each tag in allTags: */
         for(let tag in allTags){
        /* [NEW] generate code of a link and add it to allTagsHTML: */
          allTagsHTML+= tag + '('+ allTags[tag] +') ';
         }
         /* [NEW] END LOOP: for each tag in allTags: */

         /* [NEW] add html from allTagsHTML to tagList */
          tagList.innerHTML = allTagsHTML;
        console.log (allTags);
        }
    }


generateTags();

function tagClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active  */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link */
    for (let tag of activeTags) {
        tag.classList.remove('active');
    }
    /* remove class active */
    /* END LOOP: for each active tag link */

    /* find all tag links with "href" attribute equal to the "href" constant */
    const tags = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */
    for (let tag of tags) {
        tag.classList.add('active');
    }
    /* add class active */
    /* END LOOP: for each found tag link */

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
    /* find all links to tags */
    const links = document.querySelectorAll(optArticleTagsLinkSelector);

    /* START LOOP: for each link */
    for (let link of links) {
        link.addEventListener('click', tagClickHandler);
    }

    /* add tagClickHandler as event listener for that link */

    /* END LOOP: for each link */
}

addClickListenersToTags();


const links = document.querySelectorAll(optTitleListSelector + ' a');
for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}

function generateAuthors(){

  /* find all articles DONE */

  const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

  for (let article of articles) {
    console.log(article);
  
  /* START LOOP: for every article: DONE */

    /* find authors wrapper */
    const authorsList = article.querySelector(optArticleAuthorSelector);


    /* make html variable with empty string */
    let html = '';

    /* get authors from data-author attribute  */

    const articleAuthors = article.getAttribute('data-author');


      /* generate HTML of the link */

      const linkHTML = '<li><a href="#author-' + articleAuthors + '">' + articleAuthors + '</a></li>';

      /* add generated code to html variable */

      html = html + linkHTML;
  
    /* insert HTML of all the links into the authors wrapper */
       authorsList.innerHTML = html;
  }

  /* END LOOP: for every article: DONE */
}


generateAuthors();

function authorClickHandler(event){
  /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */

  const author = href.replace('#author-', '');

  /* find all tag links with class active */
  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

  /* START LOOP: for each active tag link */
  for (let author of activeAuthors) {
    author.classList.remove('active');
}

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */
  const authors = document.querySelectorAll('a[href="' + href + '"]');


  /* START LOOP: for each found tag link */
  for (let author of activeAuthors) {
    author.classList.add('active');
}

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateAuthors" with article selector as argument */

authorClickHandler('[data-author="' + articleAuthors + '"]');
}

function  addClickListenersToAuthors () {
  /* find all links to tags */
  // const links = document.querySelectorAll()


  /* START LOOP: for each link */
  for (let link of links){
    link.authorClickHandler('click', addClickListenersToAuthors);
    console.log(links);
  }

  /* add authorClickHandler as event listener for that link */

  /* END LOOP: for each link */
}
addClickListenersToAuthors ();




