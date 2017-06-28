# Warehouse Web Developer Exercise

In this excercise we would like you to build a web component similar to this [screenshot](recommendation_screenshot.png) using the [JSON](data/recommendations.json) provided. Creativity is accepted but do not alter the JSON. The componet you build should display images, prices and link to the product taking into consideration how it would work with i18n.

### Requirements
* Responsive
* Reusable code

Please fork this repository and commit your changes for review.

Amend this Readme in your forked repo and use your commits to outline the component you have created and the decisions that you have made.

_______________

28/06/2017

I've attempted to keep this exercise as simple as possible by making use of the Bootstrap CSS Framework for quick responsiveness and styling. I utilised their V4 beta styling which supports cards and specifically, card decks which are responsive elements that flex to the container width.

JSON data was imported using JQuery and the data was placed in to an array. I then looped through the entire array, where each element is added to a HTML template which is then appended to a div element in the HTML.

The CSS is responsive and light and works across many mobile devices. I've tested this design on various screen sizes and resolutions.
