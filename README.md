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
<img src="https://pbs.twimg.com/profile_images/1369193856193896455/ci1iOBnV_400x400.jpg" width=50 height=50 style="border-radius: 50%;
  margin: 1rem;" />
  
A complete ReactJs architecture to start fast a project without many configurations. 


- [Usage](#usage)
- [What does include](#includes)

# Usage 

## Cloning Template

```bash
npx @susegroj/react-starter-pack
```

***NOTE***
During this process you will be ask to answer some question in order to have a clean, customized and ready to start copy of this template including with a customized `README.md` file (used [readme-md-generator](https://github.com/kefranabg/readme-md-generator) for this step)

And... thats it!

## Running command

For development
```bash
yarn development
```

For builds
```bash
yarn build
```

***

# Includes

**What does this includes?**

<details>
  <summary>Webpack</summary>
  
  \
  **Some webpack configurations so you can start fast**
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
  - Three files configurations
    - All the commons configurations between environments `webpack.commons.js`
    - Optimized for development environment `webpack.config.dev.js` 
    - Optimized for production environment `webpack.config.js`
</details>

<details>
  <summary>Routing with react-router-dom</summary>
  
  \
  **Some simple routing configurations, easily to handle**
  - An easy configurable `routes.js` files with params for private and public routes.
  - A `CustomRoute` file with some settings just to add your authorization function based on your needs.
  - A `PrivateRoute,jsx` file with some settings just to add your authorization function based on your needs
  - A main `App.jsx`for handle all the routes, allowing context hook usage and also with i18n language configurations
</details>

<details>
  <summary>Sass</summary>
  
  \
  **A simple but effective sass architecture that includes simple** 
  
  - `animations` A collection of simple animations using mixins
  - `mixins` Custom mixins for repetitive code, save time, includes
    - Animations
    - Keyframe
    - Hover
    - Flex
    - Images
    - Inputs
    - Skeleton Loader
    - Loader
  - `colors` A template where you can create your color variables or a full color theme
  - `fonts` A template where you can add all your fonts
  - `breakpoints` A list of most common used breakpoints
  - `main` A list of most used presets/resets based on my daily bases practices
</details>
  
<details>
  <summary>Style and JS linter</summary>
  
  \
  **Trying to following the best practices and clean code.**
  
   - *Styles* 
      - `stylelint-config-sass-guidelines` rules   
       *Note: Strongly recommended instal stylelint on your code editor for   format on save*
   - *JS*   
      -  `plugin:react/recommended`,`airbnb`, `prettier` rules   
          Note: Strongly recommended having installed eslint and prettier on your code editor for format on save*
</details>

<details>
  <summary>I18n Langugage labels with react-i18next</summary>
  
  \
  You can handle all the labels of your app in multiple languages. It has 2 languages already configured, `english` and `spanish`. There is a function for handle the language change on the `useInitialState`  custom hook which works along with `useLocalStorage`custom hook.
</details>
   
<details>
  <summary>Netlify settings</summary>
  
  \
  It contains a basic pre configurations so yoy can easily deploy your app in Netlify.   
  ***Note*** : Set your base directory as `/` in your netlify configurations in order to handle the routes.
</details>

<details>
  <summary>LocalStorage and React Context hooks</summary>
  
  \
  These two hooks works along perfectly to manage your global state and take advantage for localStorage. Just add your own props on `initialState.js` and your functions on `useInitialState.js` file. `useLocalStorage.js` should not be modify, be careful. 
</details>

<details>
  <summary>PWA</summary>
  
  \
  It also contains a simple pwa configurations.
 </details>

<details>
  <summary>Extra nice libraries</summary>
  
  \
  **I also add some extra libraries that you can use to make your app look and works better**
  
  - React Helmet.  
  This is used to change the tab header on your browser and also to make better SEO. Check more on react-helmet [docs](https://github.com/nfl/react-helmet#readme)
  - React Hook Toast
  I found this nice library to make you easier create and show notifications on your app. Check more on react-hot-toast [docs](https://react-hot-toast.com/docs)
  - React Icons
  A nice library that gatters all nicest svg icons for your app. Check more on react-icons [site](https://react-icons.github.io/react-icons)
  - Husky
  Help us to follow best practices and prevent (runnig our linters) before you commit or push to your repo. Check more [here](https://typicode.github.io/husky/#/)
</details>

*** 

## Author

<div style="display: flex;
  flex-direction: column;">
<section style=" align-items: center;
  display: flex;">
<img src="https://pbs.twimg.com/profile_images/1369193856193896455/ci1iOBnV_400x400.jpg" width=50 height=50 style="border-radius: 50%;
  margin: 1rem;" />

  💻 **Jorge Macías Morales [@susegroj](https://github.com/susegroj)**   
</section>

* Website: <https://github.com/susegroj>
* Twitter: [@susegroj](https://twitter.com/susegroj)
* Github: [@susegroj](https://github.com/susegroj)
* LinkedIn: [@jorgemaciasmorales](https://linkedin.com/in/jorgemaciasmorales)

<section>
If you find it useful, please show your support 👇🏼   <br/>
<a href="https://www.buymeacoffee.com/susegroj" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="box-shadow: 0 3px 2px 0 rgba(190, 190, 190, 0.5) !important;
  box-shadow: 0 3px 2px 0 rgba(190, 190, 190, 0.5) !important;
  height: 41px !important;
  margin: 16px 0 !important;
  width: 174px !important;" ></a> <br/>

Also you can share o give ⭐⭐ 
</section>
</div>


## 📝 License

Copyright © 2021 [Jorge Macías Morales <@susegroj>(https://github.com/susegroj)](https://github.com/susegroj).<br />
This project is [MIT](https://github.com/susegroj/react-starter-pack/blob/master/LICENSE) licensed.

***

