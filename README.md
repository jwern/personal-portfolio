# README

# Personal Portfolio

This project is designed as a reusable template for a personal portfolio. It is a customized version of the portfolio I built for myself, but refactored to allow easy editing of content: if you'd like to use this portfolio yourself, you only need to edit a few files with your own information and assets.

I wanted to create a portfolio template that other developers could implement quickly, in case you need a portfolio on short notice or don't want to build one from scratch. This project is licensed under the terms of the MIT license: anyone is welcome to use this template as-is, as well as edit it freely to meet your own needs or preferences.

## Functionality

The features of this portfolio include:

- Header navbar with logo / brand and links to external sites
- Text-based intro section
- Two project sections for displaying professional and personal projects as cards in a gallery
- Modals to display a desktop and mobile view / screenshot for each project card
- Footer with copyright info and site credits modal

The content of each of the features above is configurable through standalone files separated from the rest of the project's code. If you want to add your own nav links or intro text, etc., you don't need to edit the core HTML or JavaScript files.

## Getting Started

To get started with the portfolio, clone this repo to your local directory.

In the root of the cloned repo, run:

```
npm install
```

All of the dependencies used in this project are related to webpack and appear in the webpack config files contained within.

Two webpack environments are included, and their scripts are defined in package.json:

To run a development environment, run:

```
npm start
```

The dev-server should open a browser window automatically and live reload when you save any edited files.

To create a production bundle, run:

```
npm run build
```

This will output your bundles to the dist/ directory (it will create dist/ if it doesn't exist yet). After running `npm run build`, in the dist/ folder you should see:

- all files from src/custom/images copied over to the dist/images directory
- a single index.html file
- a single main."hash".bundle.js file
- a single style."hash".css file

This is the folder you should use when pushing your site live.

## Configuring / Adding Your Own Content

This portfolio template is designed specifically to separate content from functionality: this should allow you to add your own content without having to search through or edit the more complex areas of the files and code.

There is a src/custom/ folder included. This folder, and its included files, is where you should add your own content. We'll discuss each area of the custom/ folder below:

### images/

The images/ folder is where you should add any project images you want to use in your portfolio, as well as any other assets (like a logo). The directory is set-up with two sub-folders, desktop/ and mobile/, for simpler organization, but you don't have to use these. Asset types that can go in this folder include .jpg, .svg, .png, .pdf, .gif.

### contactInfo.js

This file contains most of the non-project-specific content you'll want to include in your portfolio. Inside this file, you'll see items like:

```
const webPageTitle = "My Portfolio";

const introParagraph = `
  This is my intro paragraph.

  Here are some details about me.
`;
```

To add your own details / info, just edit the strings to display whatever you'd like. The variable names should remain the same.

As an example using the above variables, you might change these to:

```
const webPageTitle = "Dave Smith | Front-end Developer";

const introParagraph = `
  My name is Dave Smith, and I'm a Front-end Developer with extensive React experience.

  I'm currently open to new opportunities and would love to chat!
`;
```

The file comments contain more details about each individual element.

### projectsList.js

The projectsList.js file is where your individual project details will live. This file is separated into two arrays of objects: professionalProjects and personalProjects.

Each project should be an object within one of these arrays. The object format is the following:

```
{
  title: "Project One",
  id: "projectOne",
  desktopUrl: "./images/desktop/desktop.png",
  desktopButton: "Desktop View",
  mobileUrl: "./images/mobile/mobile.png",
  mobileButton: "Mobile View",
  showMobile: true,
  externalLink: "Link to Project",
  externalUrl: "#",
  techDetails: `Details about the tech stack and processes used.`,
},
```

The information provided will be used to build the project's card and screenshot modals on your portfolio page. The keys for the project objects, like "title", "id", "desktopUrl", etc. should not be changed. You should edit the values of each key to match your project's details.

The file contains a few sample projects whose format you can copy, as well as a commented entry that explains where each property will be used. Everything except showMobile is a string: desktopUrl and mobileUrl should link to the images you uploaded for the project in custom/images/

Although showing a mobile screenshot is optional (via the showMobile boolean flag), you will need to at least include a desktop screenshot as this is used for the card itself in the project gallery.

### customVariables.scss

This file allows you to edit some of the CSS styles used in the portfolio. The customizable elements are:

- Fonts (both the navbar logo font and body font used everywhere else)
- Theme colors (all colors except the white background of the cards)
- Toggle icon on the mobile menu (when navbar links are collapsed)

The file contains details on where each style is used. The variable names should not be changed, as they are referenced in style.scss.
