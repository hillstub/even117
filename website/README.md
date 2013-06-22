# dodedodo website

The pages can be found in the static folder. The main node.js/express.js file is web.js in de root. The coupling of the client-side javascript code on the contact.html page, is via AngularJs and the controller in assets/js/contact.js. This is not a neat way to do it. Normally you would set up routes also on the client side which match the ones in the server side.

The contact form subsequently sends me an email. This is implemented using SendGrid, one of the add-ons of the Heroku platform. You need specific instructions from their website if you want to use it in your own app. Heroku needs your credit card info if you want to use add-ons, even if they are free for up to a few hundred emails as in the case of SendGrid.

The flow is like this:

* static/contact.html is defined as ng-app, refers to the contact.js script, and has a form with ng-submit, and ng-controller
* assets/js/contact.js defines the EmailCtrl controller, which does an http post request on /contact
* web.js defines the incoming /contact route, on sending an email through SendGrid it responds with a "true" success value
* assets/js/contact.js receives this value and sets one boolean or the other
* static/contact.html is automatically updated and shows a success or failure message to the user

# todo

There are a few things to do:

* the assets/js directory contains a lot of javascript libs that are not used (anymore), remove them
* use minified versions of the javascript libs that are used

