# IBM Cloud Advisor 101 Course

![Galvanize](images/galvanize.png)
![Watson](images/watson.gif)
![IBM Bluemix](images/ibm.jpg)

## Cohort 2016-03-14

### Food Schedule
  - Monday: 8am - 5pm (Breakfast and Lunch served)
  - Tuesday - Friday: 9am - 5pm
  - Friday: 5pm (Hosted Happyhour on Rooftop)

### Coding Schedule
  - Monday: Fundamentals
  - Tuesday: Backend, OpenWhisk, NodeRED, Frontend, DevOps, CloudFoundry
  - Wednesday: Fullstack Apps with Microservices
  - Thursday: Fullstack Apps with Microservices
  - Friday: Hackathon

### Syllabus

#### Arrive & Setup
  - Meet & Greet + Breakfast
  - Get on Network (g|events -> machinelearning)

#### Introductions
  - Roll Call, Verify Emails
  - Students
  - Instructor
  - About Galvanize, http://www.galvanize.com/
  - Course Overview

#### Bluemix Garage
  - https://www.ibm.com/cloud-computing/bluemix/garage/
  - Presentation
  - Design Thinking

#### Assessment
  - Technical
  - Cloud
  - Agile

#### Cloud 9 Setup
  - https://c9.io/
  - Create a Custom Ubuntu Workspace
  - Open Terminal

```sh
$ rm README.md
$ wget https://raw.githubusercontent.com/chyld/devops/master/c9-setup.sh
$ chmod +x c9-setup.sh
$ ./c9-setup.sh
$ rm c9-setup.sh
$ vi ~/.gitconfig
$ exit
```

#### Modern Programming Fundamentals
  - JavaScript
  - Node.js, https://nodejs.org/en/
  - Module system
  - Pair Programming
  - Test Driven Development: [Mocha](https://mochajs.org/) | [Chai](http://chaijs.com/)
  - [Git](http://git-scm.com/)
  - [JazzHub](https://hub.jazz.net/)

| Project | Description |
| ------------- | ------------- |
| `add(1,2)`  | Add 2 numbers, compute sum |
| `sub(3,5)`  | Subtract 2 numbers, find difference |
| `square(2)` | Square a number |
| `factorial(5)` | Compute factorial |
| `distance(p1, p2)` | Compute distance between 2 points on a plane |
| `roll(6)` | Roll a random n-sided die |
| `sum([3,5,7])` | Sum an array of values |
| `squareOdds([1,2,3,4,5])` | Return an array of squared odd values |
| `bmi(75, 195)` | BMI Calculator. Input height, weight. Return BMI |

#### Back End Services
  - HTTP
  - Express.js, http://expressjs.com/
  - Async Programming with Callbacks & Promises
  - Node.js Perf Test with Apache Bench

| Project | Description |
| ------------- | ------------- |
| Hello Express | Basic hello world in Express.js |
| Max | Return the largest number |
| Hog/Pig  | Dice Game |
| Stock Quote | Build a service that returns a quote for a stock symbol |

#### IBM Bluemix DevOps Services
  - https://hub.jazz.net/
  - JazzHub
  - Code Editor
  - Track & Plan
  - Build Pipeline

#### OpenWhisk
  - Distributed, Event Driven Compute
  - [Notes & Lab](openwhisk.md)

#### NodeRED
  - http://nodered.org/
  - https://console.ng.bluemix.net/catalog/starters/node-red-starter/
  - Create Application on Bluemix

#### Cloud Foundry
  - https://www.cloudfoundry.org/
  - CLI
  - Deploy from Command Line
  - Create Services
  - Bind Services
  - View Marketplace
  - View Application Credentials
  - Scale up or Down App Instances

#### Chrome Debugging Plugins
  - [Chrome Logger](https://chrome.google.com/webstore/detail/chrome-logger/noaneddfkdjfnfdakjjmocngnfkfehhd)
  - [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)
  - [Angular Inspector](https://chrome.google.com/webstore/detail/ng-inspector-for-angularj/aadgmnobpdmgmigaicncghmmoeflnamj)

#### Front End Technologies
  - Browser
  - Angular, JavaScript MVC Framework, https://angularjs.org/
  - Twitter Bootstrap CSS Framework, http://getbootstrap.com/
  - Highcharts Analytical Charting, http://www.highcharts.com/
  - Build Tools, Gulp
  - [Fullstack Template](https://github.com/BluemixCloud/full-stack-template.2016.03.03)

| Project | Description |
| ------- | ----------- |
| Movies | Basic HTML & CSS site |
| Hello Angular | Angular.js hello world Application |
| Weather Service | Display the weather forecast |

#### Bluemix Services
  - [SQL Database](https://console.ng.bluemix.net/catalog/services/sql-database/)
  - [Cloudant](https://console.ng.bluemix.net/catalog/services/cloudant-nosql-db/)
  - [Object Storage](https://console.ng.bluemix.net/catalog/services/object-storage/)
  - [Language Translation](https://console.ng.bluemix.net/catalog/services/language-translation/)
  - [Visual Recognition](https://console.ng.bluemix.net/catalog/services/visual-recognition/)
  - [Text to Speech](https://console.ng.bluemix.net/catalog/services/text-to-speech/)
  - [Speech to Text](https://console.ng.bluemix.net/catalog/services/speech-to-text/)

#### Full Stack Applications
  - Front End
  - Back End
  - API Consumption
  - Microservices

#### Projects

| Project | Description |
| ------- | ----------- |
| Twitter Analysis | Build an app which takes in a stream of tweets from Twitter, runs the data through Sentiment Analysis, stores the data in a DB2 database and then run SQL queries against that database using an Angular frontend while displaying the dynamic data using HighCharts.js. |
| Location Awareness | Build an app that determines your current latitude and longitude using a built in GPS device, radio tower triangulation, IP lookup, etc., then reverse geocodes that data to find the city, state and street address. Then it queries the Yelp API and weather API to find local, nearby recommendations along with the current weather. It displays the results on a live, dynamic updating Google Map. |
| SMS Lookup | Use Twilio's messaging API to build an SMS enabled app. Users can find current stock, weather, movie information or language translations simply by texting a query to your application. |
| Optics | Build an app which uses the built in camera in your laptop to perform facial recognition. Your app will take a snapshot from your laptop's camera, send that to Object Storage for saving, then sent to Watson Visual Recognition to determine the characteristics of the photo in question, storing the resultant data in a Cloudant database and returning the results back for display in the browser. |
| Real Time Translator | Make an app which will record your voice using the built in microphone in your laptop. The resuting WAV file will get saved in Object Storage, then send to Watson's Speech to Text service to get translated, after becoming text, it will then be translated into another language, then processed by Watson's Text to Speech service. The resulting sound file will then get sent back to your laptop, into the browser and played through the speaker. Your voice, your language, translated into another language and played back using a different voice.  |

#### Hackathon
  - http://bluemixathon.devpost.com/
  - https://vimeo.com/137915648
  - http://www.linkedin.com/pulse/so-you-want-run-corporate-hackathon-vinod-ralh
  - Split into groups of 3 or 4
  - Each team build an application using Bluemix services and deploys using DevOps services
  - At the conclusion of the hackathon, each team demos their app to the class

#### Retrospective

#### Feedback
  - https://docs.google.com/a/galvanize.com/forms/d/1jRT3EE_acCe_V8iWA77nU8sdqhbBmIiHUsAiMVQt4Eo/viewform

#### Tour
  - Galvanize
  - Full Stack Classrooms
  - Data Science Classrooms
  - Bluemix Garage
  - Cloudant
  - Startups

#### Happy Hour on Roof

### APIs

| Name | Documentation | Register | Key | NPM |
| ---- | ------------- | -------- | ------- | ----------- |
| Stock Quote | [Docs](http://dev.markitondemand.com/MODApis/) ||||
| Weather | [Docs](http://openweathermap.org/current) | [Register](http://home.openweathermap.org/users/sign_up) |||
| Mashape | [Docs](https://market.mashape.com/explore)| [Register](https://market.mashape.com/explore) |||
| MovieDB | [Docs](http://www.omdbapi.com/) ||||
| Yelp | [Docs](https://www.yelp.com/developers/documentation/v2/overview) | [Register](https://www.yelp.com/signup) | [Key](https://www.yelp.com/developers/manage_api_keys) | [NPM](https://www.npmjs.com/package/yelp) |
| Twilio | [Docs](http://twilio.github.io/twilio-node/) | [Regsiter](https://www.twilio.com/try-twilio) || [NPM](https://www.npmjs.com/package/twilio) |
| Google Maps | [Docs](https://developers.google.com/maps/documentation/javascript/tutorial) | [Register](https://console.developers.google.com) |||
| Wikipedia | [Docs](https://www.mediawiki.org/wiki/API:Main_page) ||||

### Reference Links
  - [DB2 Data Types](https://www-01.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.sql.ref.doc/doc/r0008483.html?cp=SSEPGG_10.5.0%2F2-12-2-3)

### Books
  - [You Don't Know JS 6-book series](https://github.com/getify/You-Dont-Know-JS)
  - [Eloquent JavaScript](http://eloquentjavascript.net/)
  - [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
  - [Human JavaScript](http://read.humanjavascript.com/ch04-organizing-your-code.html)
  - [JavaScript Allonge](https://leanpub.com/javascript-allonge/read)
  - [Speaking JavaScript](http://speakingjs.com/es5/)
