<p align="center">
<img src="https://github.com/projectcarbond/aloo/raw/master/.github/logo.png" height="120">
</p>

# Aloo - the base to your *torkari* (project).

[![Build Status](https://travis-ci.com/projectcarbond/aloo.svg?branch=master)](https://travis-ci.com/projectcarbond/aloo)
[![dependencies Status](https://david-dm.org/projectcarbond/aloo/status.svg)](https://david-dm.org/projectcarbond/aloo)
[![devDependencies Status](https://david-dm.org/projectcarbond/aloo/dev-status.svg)](https://david-dm.org/projectcarbond/aloo?type=dev)
<a href="https://discord.gg/EJjXasw">
        <img src="https://img.shields.io/discord/308323056592486420.svg?logo=discord"
            alt="chat on Discord"></a>
![version](https://img.shields.io/badge/version-0.1.0-blue.svg?maxAge=2592000)

An easy starting point with ReactJS, SASS and Redux with Server Side Rendering.

## Why use aloo?

Does not come with a lot of pre-config, almost everything is seperately handled such that you can modify based your needs while using the popular dev standards:
- ES2017 Support for both Frontend and Backend
- ExpressJS static server (can also be configured to be an API server!)
- ReactJS + Redux (with server side rendering to [optimize load speed](https://hackernoon.com/server-side-vs-client-side-rendering-in-react-apps-443efd6f2e87)) 
- SASS for styling (with glob importing)
- Jest + Enzyme + Eslint for extensive testing
- Travis CI/CD Support (however easily portable to your choice of CI/CD)

## Installation

```bash
  $ git clone https://github.com/projectcarbond/aloo.git [your_project_name]
  $ cd [your_project_name]
  $ yarn install
```

## Development

```bash
  # Develop
  $ docker-compose up

  # All Tests
  $ docker-compose exec server yarn test

  # Unit Test
  $ docker-compose exec server yarn unit-test

  # Lint
  $ docker-compose exec server yarn lint

  # Run in Production
  $ docker-compose run server yarn prod-start -d
```

## Things left to do

- Documentation
- More extensive README
- Create Starter kits for other languages (preferably Django/Flask/Golang)

## License

This project is licensed under the MIT license.

If you have any questions or comments, please create a new issue. I'd be happy to hear your thoughts.

<p align="center">
<img src="https://github.com/projectcarbond/aloo/raw/master/.github/bangladesh.jpg" height="20" style="max-width:100%;">
</p>
