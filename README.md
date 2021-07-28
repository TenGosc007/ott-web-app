# OTT Player

## Table of Contents

- [General Info](#generalinfo)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Setup](#setup)
- [Demo](#demo)

### General Info

---

The OTT web application names **_OTT Player_** containing video content with the option of
playback. Enjoy a wide library of high-quality movies whether you are using a computer, tablet or phone. Check it now!

![OTT Player](./src/assets/Screenshot.png?raw=true "Title")

**If you don't want to run the project locally, you do not have to read anything more, just visit the <a href="https://ottplayer.netlify.app">site!</a>**

### Technologies

---

Project is created with:

- TypeScript
- SASS
- Node.js
- React
- ReactPlayer
- Redux-Toolkit

### Requirements

---

To be able to run the project locally, you need to have installed **yarn package manager**
If you do not know if you have it installed on your computer and you still want to run our project follow these steps:

#### Windows command prompt/Linux bash

##### Run _npm -v_

- _If you received a number like 'x.x.x' you already have installed_ **npm package manager** \*on your computer and you can follow the next part, which is installing **yarn**
- \*Otherwise, you will have to install it, the best way to do it is installing it globaly by running the command **npm install npm@latest -g\***
- _After that you can run again the command from the first line just to confirm that you have succesfully installed required_ **package manager**

##### Install yarn

- _To install yarn_ **package manager (faster vesrion of npm)** \*run the commnad **npm install --global yarn\***
- \*confirm yarn install by tpying command **yarn --version\***

### Setup

---

- Run command **yarn** to install all node modules
- Run command **yarn start** or **yarn dev** (with access to redux toolkit )
- Enter the local host that was created which should be at **<a href="http://localhost:3000">localhost:3000</a>**
- **_You can now use the fully functional application!_\***

### Demo

---

A working demo has been placed on the Netlify platform.
**Check it out <a href="https://ottplayer.netlify.app">ottplayer.netlify.app</a>**

There is a problem with the header "Access-Control-Allow-Origin". For the page to connect to the backend, it uses a heroku proxy.
**If you are launching the website for the first time, visit this <a href="https://cors-anywhere.herokuapp.com/corsdemo">page</a> first and click the button "Request temporary access to the demo server"**
