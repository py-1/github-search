# Github Search

A simple Github search UI that gets user/organization repositories and ranks by stars.


## Install

After cloning the repo:

- `$ npm install`
- Create a "secrets.js" file at project root. Add the following:
  ```
    export const SECRETS = {
      GITHUB_ACCESS_TOKEN: "xxxx"
    };
  ```
  To get a Github access token, follow [these instructions](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)
- `$ npm start`
- Visit `http://localhost:4200`


## Tests

- `$ npm test`


## MVP

* [x] Get list of repositories for a user.
* [x] Get list of repositories for an organization.
* [ ] Add UI input/search bar. Give user option to select user or organization.
* [ ] On submit, list repositories ordered by most likes at top.


## Stretch Goals

* [ ] Add additional options to display to user for each repository listed. Maybe add a max limit?
* [ ] Add endless scroll or pagination.
* [ ] Add past searches. Possibly cache results. Keep 5 most recent.
* [ ] Deploy to Heroku or S3
* [ ] Add circle ci
* [ ] Look into a lookahead library or see if Github API has a search ability.
* [ ] Bash script for generating secrets.js
