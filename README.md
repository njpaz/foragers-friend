# Foragers Friend

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Phonegap Setup

You need Phonegap in order to run this project. To install and configure it, follow these steps.

* `npm install -g phonegap`
* Add a `platforms` folder, then run `phonegap run browser`.
* In `platforms/browser/run`, add this to the switch statement:

```
case 'linux':
  spawn('google-chrome', ['--test-type', '--disable-web-security', '--user-data-dir=/tmp/temp_chrome_user_data_dir_for_cordova_browser', project]);
  break;
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

