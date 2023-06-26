# imgur-gallery

## Getting started

To get the frontend running locally:

* Clone this repo
* `npm install` to install all required dependencies
* `npm run dev` to start the local server (this project uses [https://vitejs.dev/](https://vitejs.dev))

Local web server will use port 5173 instead of standard React's port 3000 , so you will go to http://127.0.0.1:5173/

Since this project is just an test the client id required from Imgur API is hardcoded inside /src/api/index.ts

## Packages used

* React
* Redux(toolkit)
* Material-ui
* Material ui icons
* Es lint
* React router

## Functionality overview

This app uses Imgur API to consume gallery data

**General functionality:**

* View all images or videos in a grid
* When clicking to a card you can see page details
* Detail page include [title,  ups, downs, tags]
* Some filters are also included like [sorting, section, window(only when section is set to top), show viral, show mature]
