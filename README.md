# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > When child is clicked on in the browser it executes from the Kids.js. First I set up a funtion kidWish to set up the event listener that listens to click. If a click happens it is stored in clickTarget. Then it checks if (clickTarget.dataset.type === "child"). When a child's name is clicked on a window alert is triggered with window.alert(clickTarget.dataset.wish). Then user see's a window alert that shows the child's wish.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Because the function needs to check on kid at a time to see if the celebrity's id matches the kid's celebrityId
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > When a celebrity's name is clicked on an event listener listens for a click; this function is located in CelebrityList.js. If a click happens it's stored in the clickEventTarget. Then it checks   if (clickEventTarget.dataset.type === "celebrity"). The sport is stored on each <li> in the data-sport="${celebrity.sport}" in the list in the Celebrities function. The funtiion is linked/invoked via html through the main.js. 
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > 1. Imported fucntions from scripts files are generated. 
   import { Pairings } from "./Pairings.js"
   import { Celebrities, celebritySport } from "./CelebrityList.js"
   import { Kids, kidWish } from "./Kids.js"
   kidWish()
   celebritySport()

   2. Container element grabs the html from the main container.
   3. All files code are invoked via html string; applicationHTML. It calls kids, pairings, and celebrities.
   4. Then it renders the DOM with mainContainer.innerHTML = applicationHTML.
   5. Then the event listeners kidWish and celebritySport is invoked. 
  

