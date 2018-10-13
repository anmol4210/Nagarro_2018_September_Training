# Frontend Evaluation Project

## Summary 
Create a Medium clone, using the [Realworld Project API](https://conduit.productionready.io/api) 
where people can create accounts, write articles, and comment on others' articles. 

You need to only create the frontend project, without concern about the implementation of backend. 
Simply use already deployed API (link above).

## Required Functionality

### User Authentication

 - Signup
 - Login
 
 NOTE: Use localStorage to store the JWT
 
 ### Articles
 
 - Seeing the feed of all articles (route: `/articles`)
 - Open and read a particular article  (route: `/articles/{article-name}`) 
 - Write a new article 
 - Edit own older articles
 - Delete own articles
 
 ### Comments
 
  - See comments under articles
  - Write your own comment under an article
  - Delete own comments
  - Edit own comments
  
## Bonus Functionality
Adding these gets you extra points

 - Support for tags, and seeing articles of only particular tag
 - Setting articles as favourites and browsing own favourite articles

## References
Real World project README - https://realworld.io

Sample Application (Try to make it similar to this)
https://demo.productionready.io

#### API
Endpoints - 
https://conduit.productionready.io/api

Example 
https://conduit.productionready.io/api/articles


#### API Documentation
https://github.com/gothinkster/realworld/blob/master/api
