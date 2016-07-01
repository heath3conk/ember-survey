# Ember-survey
##Things I haven't figured out:
  * Authentication
    - It looks like Firebase should do this based on emails & passwords. I've almost figured out how to get the login information to Firebase for authorization and authentication. 
    - Currently getting an error that says I need to initialize a Firebase app. (Unmerged "authentication" branch)
  * Authorization
    - Once I have a user authenticated, I should be able to find the user record in my database and confirm their role. 
    - I'd have to figure out how to restrict routes based on that role.
  * Nested routes
    - I can get to questions and surveys. 
    - I've been looking at tutorials about dynamic routes, where I'd pass the question_id or survey_id as a parameter in the URL. 
    - Couldn't get that to work on the "rest" branch.
  * Edit/Destroy
    - I haven't attempted these. They're the next steps in the Emberfire tutorial I've been using. They seem pretty straightforward but...
    
##Other notes/interesting things:
  * Does Ember add an ID to DOM elements created with the {{}} helpers?
  * Looked at Torii for authentication but it seemed to focus on using external providers like Twitter, Google, etc. and I thought that would make it more difficult to handle authorization based on users' roles. (If anyone who has a Google account can login, how do I filter users?)
  * I'm not sure I know the difference between an Ember template and a component. Thought I had it but...now it's fuzzy.

##Tasks:
* Schema
* Wireframes
* Database?? Firebase - DB, server, hosting
* Users: 
  - model/associations
  - encryption/authentication
  - login route
  - logout route
  - authorization based on role
* Surveys:
  - model/associations
  - update route
  - show (stretch)
* Questions:
  - model/associations
  - index route
  - new route
  - update route
  - delete route
* Validations
