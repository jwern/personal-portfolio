/* Personal info used in the header, footer, and intro paragraph
All entries except footerInfo (credits) should be updated to display your personal details */

// Title of the page / will appear on the browser tab
const webPageTitle = "My Portfolio";

// Logo - just a string right now
const navBrand = "My Logo";

// External links to your relevant sites; the key name will be the link text
// Can change names and add or remove as you like
const navLinks = {
  GitHub: "#",
  LinkedIn: "#",
  Résumé: "#",
};

// Your intro paragraph
const introParagraph = `
  This is my intro paragraph.

  Here are some details about me.
`;

// Credits for technologies used; if nothing is changed, keep credits as written
// Otherwise feel free to add or remove as fits your final project
const footerInfo = `
  <p>This portfolio was built with <a href="https://getbootstrap.com/">Bootstrap 5</a>.</p> 
  <p>The color scheme was designed with the help of <a href="http://colormind.io/">Colormind</a> and <a href="https://colorate.azurewebsites.net/">colorate</a>.</p> 
  <p>The mobile menu icon was made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> and the external link icon is by <a href="https://www.freepik.com" title="Freepik">Freepik</a>, both from <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>.</p> 
  <p>The body font is <a href="https://fonts.google.com/specimen/Hind+Siliguri">Hind Siliguri</a> and navbar brand logo font is <a href="https://fonts.google.com/specimen/Yellowtail">Yellowtail</a>, both from <a href="https://fonts.google.com/">Google Fonts.</p> 
`;

// Your name or company for the copyright -- content is copyrighted, not layout
const footerCopyright = `<small>&copy; Copyright 2021, My Name</small>`;

// Only change exports if you rename a variable or add a new element
export {
  webPageTitle,
  navBrand,
  navLinks,
  introParagraph,
  footerInfo,
  footerCopyright,
};
