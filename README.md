# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Toggle the color scheme between light and dark mode

- Click through to the border countries on the detail page (In Progress)

### Screenshot

![](./screenshot.jpg)

### Links

- [Live Site URL:](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library (built using the create-react-app template)
- CSS custom properties
- Flexbox
- CSS Grid

Note: The API [REST Countries] (https://restcountries.com/) is shutting down, which was the original tool I was going to connect with. I decided to just use the .json file instead

### What I learned

I learned a lot about component-based building, and to focus on the functionality first, style after. In previous projects, I would build out all the HTML and CSS first, and then add in some functionality using JavaScript. Building using the React Library allows you to work at all levels (HTML,CSS, JS) in small sections at a time. I found it really helpful to not get bogged down by the tiny details, and instead focus on the bigger look and feel, and then tweak the tiny adjustments at the end to clean it all up.

### Continued development

I still need to figure out how to customize the dropdown menu in the "Filter by Region" section. This is default Chrome browser behavior, and I didn't know if there was a way to keep the dropdown as a <select> <option> semantically, while adjusting the default dropdowm behavior. I want to adress this, along with linking to the "border countries" when you click on the tabs in the country details page in a secondary iteration. I might also want to add it a bit more css animations, such as a more clean animation when toggling from dark mode to light mode.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
