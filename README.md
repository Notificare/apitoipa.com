# api2ipa.dev

From API to IPA powered by Notificare

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Gatsby](https://www.gatsbyjs.org/)

## Installation

* `npm install -g gatsby-cli`
* `git clone <repository-url>` this repository
* `cd notificare-demo-website`
* `npm install`

## Running / Development

* `gatsby develop -p 8003`
* Visit your app at [http://localhost:8003](http://localhost:8003).

### Deploying

Make sure you have valid AWS credentials, either in your .aws/credentials or as environment variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY

### Production Environment
* `GATSBY_ACTIVE_ENV=production npm run deploy`
