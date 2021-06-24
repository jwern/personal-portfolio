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

## Screenshots

### Desktop

![Desktop view screenshot](/screenshots/portfolio_screenshot_desktop.png)

### Mobile

![Mobile view screenshot](/screenshots/portfolio_screenshot_mobile.png)

## Getting Started

To get started with the portfolio, clone this repo to your local directory.

In the root of the cloned repo, run:

```
$ npm install
```

All of the dependencies used in this project are related to [webpack](https://github.com/webpack/webpack) and appear in the webpack config files contained within.

Two webpack environments are included, and their scripts are defined in [package.json](package.json):

To run a **development** environment, run:

```
$ npm start
```

The `dev-server` should open a browser window automatically and live reload when you save any edited files.

To build a **production** bundle, run:

```
$ npm run build
```

This will output your bundles to the `dist/` directory (it will create `dist/` if it doesn't exist yet). After running `npm run build`, in the `dist/` folder you should see:

- all files from [src/custom/images](src/custom/images) copied over to the `dist/images` directory
- a single index.html file
- a single main."hash".bundle.js file
- a single style."hash".css file

This is the folder you should use when pushing your site live.

## Configuring / Adding Your Own Content

This portfolio template is designed specifically to separate content from functionality: this should allow you to add your own content without having to search through or edit the more complex areas of the files and code.

There is a [src/custom/](src/custom) folder included. This folder, and its included files, is where you should add your own content. If you don't want to change the layout or functionality of the portfolio, these files are the only ones you should have to edit. We'll discuss each area of the `custom/` folder below:

### images/

The [images/](src/custom/images) folder is where you should add any project images you want to use in your portfolio, as well as any other assets (like a logo). The directory is set up with two sub-folders -- [desktop/](src/custom/images/desktop) and [mobile/](src/custom/images/mobile) -- for simpler organization, but you don't have to use these and can delete them if preferred. Asset types that can go in this folder include .jpg, .svg, .png, .pdf, .gif.

### contactInfo.js

[contactInfo.js](src/custom/contactInfo.js) contains most of the non-project-specific content you'll want to include in your portfolio. Inside this file, you'll see lines like:

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
const webPageTitle = "Dave Smith | Front-end Engineer";

const introParagraph = `
  My name is Dave Smith, and I'm a Front-end Engineer with extensive React experience.

  I'm currently open to new opportunities and would love to chat!
`;
```

The file comments contain more details about each individual element.

### projectsList.js

The [projectsList.js](src/custom/projectsList.js) file is where details about your individual projects will live. This file is separated into two arrays of objects: `professionalProjects` and `personalProjects`.

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

The information provided will be used to build the project's card and screenshot modals on your portfolio page. The keys for the project objects, like `title`, `id`, `desktopUrl`, etc. should not be changed. You should edit the values of each key to match your project's details.

The file contains a few sample projects whose format you can copy, as well as a commented entry that explains where each property will be used. (I recommend just copy / pasting a sample object when adding a new project.) Everything except `showMobile` is a string: `desktopUrl` and `mobileUrl` should link to the images you uploaded for the project in [custom/images/](src/custom/images)

Although showing a mobile screenshot is optional (via the `showMobile` boolean value), you should at least include a desktop screenshot as this is used for the card itself in the project gallery. An empty string for a value will not break the code, but it will cause less-than-desired results on some elements (e.g. if you don't have any text on a button, it will just be a tiny, empty button).

### customVariables.scss

[customVariables.scss](src/custom/customVariables.scss) allows you to edit some of the CSS styles used in the portfolio. The customizable elements are:

- Fonts (both the navbar logo font and body font used everywhere else)
- Theme colors (all colors except the background of the cards)
- Default colors (card backgrounds, tech details text, copyright text)
- Toggle icon on the mobile menu (when navbar links are collapsed)

The default theme is grayscale: if you design a new three-color theme, you can just change the three theme color variables and all related elements will be updated.

The file contains details on where each style is used. The variable names should not be changed, as they are referenced in [style.scss](src/style.scss).

## Recommendations

This portfolio template relies heavily on JavaScript to produce the majority of its content -- as you can see above, the custom content files are JavaScript, which are added to the DOM within the viewer's browser. While it does use Babel (loaded via webpack) to compile ES6, it's still recommended only to use this template when you know its viewers will have JavaScript enabled.

As a backup, there is a `<noscript>` tag included in the intro section which reads:

```
<noscript>
  <div id="no-script-info" class="text-center">
    <p>This portfolio uses JavaScript to display its content.</p>
    <p>If you'd like to see some of my projects without enabling JavaScript, please visit my GitHub profile.</p>
  </div>
</noscript>
```

It's recommended that you add a link to your own GitHub profile (or wherever you'd like to send visitors) to this tag. If you'd like to make this edit, it _will_ have to be done directly in [template.html](src/template.html).

## Technologies / Credits

This portfolio was built with JavaScript, SCSS, and [Bootstrap 5](https://getbootstrap.com/). It uses [webpack 5](https://webpack.js.org/), including [babel-loader](https://github.com/babel/babel-loader), [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin), [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin), and more (see [package.json](package.json) for the full list of dependencies).

The color scheme was designed with the help of [Colormind](http://colormind.io/) and [colorate](https://colorate.azurewebsites.net/). The mobile menu icon was made by [Gregor Cresnar](https://www.flaticon.com/authors/gregor-cresnar) and the external link icon is by [Freepik](https://www.freepik.com), both from [Flaticon](https://www.flaticon.com/).

The body font is [Hind Siliguri](https://fonts.google.com/specimen/Hind+Siliguri) and navbar brand logo font is [Yellowtail](https://fonts.google.com/specimen/Yellowtail), both from [Google Fonts](https://fonts.google.com/).

## License

This project is licensed under the terms of the [MIT license](LICENSE.txt).
