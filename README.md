prepared by Piotr Sułek

Run below commands to install
`npm install`

to run tests use command
`npx cypress open`


LF - Login form
  TITLE: 1. No data provided, check validation
  Goal: werification, is validation working when no data provided
  Initials Conditions:
   - user has proper login url loaded in browser

   step                               result
   When user click submit button      User is not logged in, User stays on Login Page, Then form has validation errors applied and messages are visible

  TITLE: 2. wrong values in Login form, check validation
  Goal: werification, is validation working when data provided
  Initials Conditions:
   - user has proper login url loaded in browser

   step                                     result
  When user User type email and password
  And user click submit button              User is not logged in, User stays on Login Page, Then form has general validation error shown



  TITLE: 3. Correct values in login form
  Goal: werification, is user properly logged in
  Initials Conditions:
   - user has proper login url loaded in browser

   step                                  result
  When user User type email and password
  And user click submit button          Then user is redirected to home page