Technical assignment for Mobile Developer (JavaScript) job position at Jongla

## Set up environment
1. Install node.js
2. Install Grunt and Bower

 ```
 $ npm install -g grunt-cli bower
 ```
3. Install local dependencies

 ```
 $ npm install
 ```

 ```
 $ bower install
 ```

## Build and Run
1. Compile coffeescript and run Jasmine test

 ```
 $ grunt build
 ```

2. Start server

 ```
 $ node server.js
 ```

3. Access index.html from browser (localhost:8080/index.html)

At this point, you should be able to see a page with one button without any error.

## Assignment
Implement following features using Coffeescript and Jasmine:

1. When the button is clicked, call server API via localhost:8080/list to get sequence of characters. Let's say each one character is itemID.
2. Get detail of each item by calling API via localhost:8080/detail/#{itemID} (eg. localhost:8080/detail/a).
3. Update UI to show the detail of items from step 2 on the page.
4. Save the contents in localStorage to show the local data next time the page is loaded.
5. Add unit tests.

> eg. if localhost:8080/list responds "ab", call localhost:8080/detail/a and localhost:8080/detail/b

A few rules:

* Implement the logic in client side code (under app/ test/ and index.html). You may modify server side code (server.js) when it is necessary to complete this assignment.
* Do not add any other libraries (RSVP for Promise and Zepto for DOM management are included).
* Make the code maintainable.
* You may add or remove coffeescript files and Jasmin spec files if appropriate.

You don't need to make fancy UI. We will see how you build the logic.
