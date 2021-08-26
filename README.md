<h1 align="center">React Starter Pack (Boilerplate) ⚛</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/susegroj/react-starter-pack#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/susegroj/react-starter-pack/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://twitter.com/susegroj" target="_blank">
    <img alt="Twitter: susegroj" src="https://img.shields.io/twitter/follow/susegroj.svg?style=social" />
  </a>
</p>

A complete ReactJs architecture to start fast a project without many configurations. 

***FORK this repo and MODIFY all what you need to create your own application***

## What does includes?

- **Webpack configurations**
  - Alias for imports
  - Js and Jsx extension resolver
  - Source Map in development mode
  - Hashes for files and images
  - Loaders:
    - Babel loader
    - Html Loader
    - Css, style and sass loaders
    - Png, svg, jpg, jpeg, gif loader settings
    - Fonts loader
  - Two files configurations
    - Optimized for development environment `webpack.config.dev.js` 
    - Optimized for production environment `webpack.config.js`
- **Routes with `react-router-dom`**
  - An easy configurable `routes.js` files with params for private and public routes.
  - A `CustomRoute` file with some settings just to add your authorization function based on your needs.
  - A `PrivateRoute,jsx` file with some settings just to add your authorization function based on your needs
  - A main `App.jsx`for handle all the routes, allowing context hook usage and also with i18n language configurations
- **Sass**   
  A simple but effective sass architecture that includes simple 
  - `animations` A collection of simple animations using mixins
  - `mixins` Custom mixins for repetitive code, save time, includes
    - Animations
    - Keyframe
    - Hover
    - Flex
    - Images
    - Loader
  - `colors` A template where you can create your color variables or a full color theme
  - `fonts` A template where you can add all your fonts
  - `breakpoints` A list of most common used breakpoints
  - `main` A list of most used presets/resets based on my daily bases practices
- **Style and JS linter**   
  Trying to following the best practices and clean code.
    - *Styles* 
      - `stylelint-config-sass-guidelines` rules   
       *Note: Strongly recommended instal stylelint on your code editor for   format on save*
    - *JS*   
      -  `plugin:react/recommended`,`airbnb`, `prettier` rules   
          Note: Strongly recommended having installed eslint and prettier on your code editor for format on save*
- **I18n Language labels**   
    You can handle all the labels of your app in multiple languages. It has 2 languages already configured, `english` and `spanish`. There is a function for handle the language change on the `useInitialState`  custom hook which works along with `useLocalStorage`custom hook.
- **Netlify settings**   
  It contains a basic pre configurations so you can easily deploy your app in netlify.   
  ***Note*** : Set your base directory as `/` in your netlify configurations in order to handle the routes.
- **LocalStorage and React Context hooks**   
  These two hooks works along perfectly to manage your global state and take advantage for localStorage. Just add your own props on `initialState.js` and your functions on `useInitialState.js` file. `useLocalStorage.js` should not be modify, be careful. 
- **PWA**   
  It also contains a simple pwa configurations.

## Installation

```sh
yarn install
```

## Usage

```sh
yarn develop
```

## Run tests

```sh
yarn run test
```

## Author

 **Jorge Macías Morales [@susegroj](https://github.com/susegroj)** 💻   

* Website: <https://github.com/susegroj>
* Twitter: [@susegroj](https://twitter.com/susegroj)
* Github: [@susegroj](https://github.com/susegroj)
* LinkedIn: [@jorgemaciasmorales](https://linkedin.com/in/jorgemaciasmorales)

## Show your support
Do you find it useful? Please show your support 👇🏼   <br/>
<a href="https://www.buymeacoffee.com/susegroj" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="box-shadow: 0 3px 2px 0 rgba(190, 190, 190, 0.5) !important;
  box-shadow: 0 3px 2px 0 rgba(190, 190, 190, 0.5) !important;
  height: 41px !important;
  margin: 16px 0 !important;
  width: 174px !important;" ></a> <br/>
Give a ⭐️ if this project helped you!  


## 📝 License

Copyright © 2021 [Jorge Macías Morales <@susegroj>(https://github.com/susegroj)](https://github.com/susegroj).<br />
This project is [MIT](https://github.com/susegroj/react-starter-pack/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
