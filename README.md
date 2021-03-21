# Collabs

Collabs is a social network for creatives to find new collaborators to work with on artistic endeavors. This client-side single-page application is built in React with Redux, and is served by a back-end API built on Ruby on Rails. Stylings are provided using TailwindCSS utilities.

## Getting Started

### Dependencies

##### SPA

Up-to-date package dependencies are laid out in the `package.json` file. Upon cloning to your local machine, assuming you have `node` and a package manager installed, you can run `yarn`/`npm i` to install necessary dependencies. 

##### API/DB

The back-end is served by a Ruby on Rails API, located here: <a href="https://github.com/justinmcla/collabs-api">Collabs API</a>. Clone this repository to your local machine as well. Additional instructions on setting up the API are located in the API's `README.md` file.

##### Environment Variables

You will need to create a `.env` file in the `root` directory and declare several environment variables.

* REACT_APP_BASE_API
* REACT_APP_AUTH0_API_AUDIENCE
* REACT_APP_AUTH0_REDIRECT_URI
* REACT_APP_AUTH0_DOMAIN
* REACT_APP_AUTH0_CLIENT_ID

Currently, the API defaults to running on `localhost:3001` in development mode, and so `REACT_APP_BASE_API` should be set to: `http://localhost:3001/v1/`

For security purposes, please contact Justin at justin [at] devjwm [dot] net for assistance on getting set up with the Auth0 environment variables.

## Contributing

Fork and clone this repository to your local environment. To keep things organized, please use the following naming system for new branches:

```shell
ft/bg - change - issue number
```

For example, a branch made to close this issue:

<strong><em>Issue #17 - Reset form button does not clear form</em></strong>

Should be named:

```shell
bg-resetbuttonfix-17
```

Pull requests will be reviewed as they are received. Contributions should be limited to bug fixes, unless the feature request is marked as cleared for contribution.

## License

MIT.