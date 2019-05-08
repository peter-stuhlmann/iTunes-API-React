# iTunes API
**- built with REACT -**

[![MIT License](https://img.shields.io/github/license/peter-stuhlmann/iTunes-API-React.svg)](https://github.com/peter-stuhlmann/iTunes-API-React/blob/master/LICENSE) 
![Code size](https://img.shields.io/github/languages/code-size/peter-stuhlmann/iTunes-API-React.svg) 
![downloads](https://img.shields.io/github/downloads/peter-stuhlmann/iTunes-API-React/total.svg) 
[![open issues](https://img.shields.io/github/issues/peter-stuhlmann/iTunes-API-React.svg)](https://github.com/peter-stuhlmann/iTunes-API-React/issues?q=is%3Aopen+is%3Aissue)
[![closed issues](https://img.shields.io/github/issues-closed/peter-stuhlmann/iTunes-API-React.svg)](https://github.com/peter-stuhlmann/iTunes-API-React/issues?q=is%3Aissue+is%3Aclosed)

---

## Screenshot 

![Screenshot](./screenshot.png)

This project is based on **React**.   
Here you can find my **Vanilla Javascript** version of this iTunes tracklist: [https://github.com/peter-stuhlmann/iTunes-API](https://github.com/peter-stuhlmann/iTunes-API)

---

## Start the React App

When you have cloned the repository, you have to install the node modules from package.json.

```
$ npm i
```

After that you can start the React App with a npm command:

```
$ npm start
```

---

## Features

This project was created with React (create-react-app) and is divided into several components. The styling is written in SCSS.

### fetch API data

The music data is fetched from the official iTunes API.

### Search input

A search term can be entered in the input field. This is integrated into the API url and corresponding search results are output in a table. With current settings max. 20 results are displayed.

### Local Storage

The LocalStorage stores the search term locally for the next session. If a new search term is entered, the value of the LocalStorage is overwritten.

### Track counter

The track counter counts the tracks that are found and output for the entered search term (with current settings max. 20).

### Audio player

The audio player (play / pause) plays a sample of the selected song.

### React Router

Several Routes have been created with React-Router: currently Tracklist, Legal Notice and Privacy Policy.

---

## License

Licensed under the [MIT](https://github.com/peter-stuhlmann/iTunes-API-React/blob/master/LICENSE) License.

---

[&copy; Peter R. Stuhlmann Webentwicklung](https://peter-stuhlmann-webentwicklung.de). All rights reserved.