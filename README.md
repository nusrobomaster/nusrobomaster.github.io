[![Build Status](https://travis-ci.org/nusrobomaster/nusrobomaster.github.io.svg?branch=docs)](https://travis-ci.org/nusrobomaster/nusrobomaster.github.io)

This web page is hosted on GitHub Pages, as a static website, created by a website generator called VuePress.

## To Contribute

To contribute to this main repository, you need to be invited as the collaborator first (ideally one from each team). Then the workflow is as followed:
- Clone (not fork) the repository: https://github.com/nusrobomaster/nusrobomaster.github.io
    - Make sure you are on `docs` branch
- [__Important__] checkout a new branch, with `dev/` prefix, for example `dev/your-team-name`
- Make modifications as you wish
    - Create a `your-team-name.md` file under `nav-teams` folder
- When the changes are done, commit by command `git commit`
- Push your changes to the remote server when ready
- Make a pull request, from your `dev/your-team-name` branch to `docs` branch
- Once the pull request is approved, the website will be automatically updated by Travis CI, happy surfing!

## Using VuePress Locally

When you are making changes to the markdown files, you would like to preview how the web page is generated. Yes, you can! This is how you do it.

### On Linux machine:
- make sure nodejs and npm is installed
- in the git top folder, execute `npm install`, this will install the javascript dependencies
- then, execute `npm run serve`, and follow the instructions to open the localhost link, to see the preview!