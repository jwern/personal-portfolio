/* PROJECTS LIST README

The projects below have placeholder content that should be updated
The first project listed has comments on each property to clarify its purpose

The number of projects included is just an example: 
Feel free to add or remove projects from either array 

If an array is empty, that section will be removed from the page
(So you will never have a section header with no projects underneath)

Only values should be changed; do not update or remove key names 
(unless you are updating them throughout the repo) 
If you want to leave a property blank, keep the key
and leave the value an empty string, e.g.: mobileUrl: ""; */

const professionalProjects = [
  {
    // title -- name of project; appears on project card and screenshot modals
    title: "Project One",
    // id -- used by modals; should be unique -- no two projects should have the same id
    // id SHOULD NOT BE BLANK
    id: "projectOne",
    // desktopUrl -- used on project card and desktop screenshot modal
    // should be the relative path from template.html to the desktop image for project
    // desktopUrl should not be blank (or else card won't have an image)
    desktopUrl: "./images/desktop/desktop.png",
    // desktopButton -- changes the text displayed on the desktop modal button
    desktopButton: "Desktop View",
    // mobileUrl -- used on mobile screenshot modal
    // should be the relative path from template.html to the mobile image for project
    mobileUrl: "./images/mobile/mobile.png",
    // mobileButton -- changes the text displayed on the mobile modal button
    mobileButton: "Mobile View",
    // showMobile -- determines if a mobile screenshot button & modal will be displayed
    // set to false if you don't want to display a mobile screenshot (will remove mobile modal & button)
    showMobile: true,
    // externalLink -- the text displayed at the bottom of the project card on its link out
    externalLink: "Link to Project",
    // externalUrl -- where externalLink will send users that click
    // should be a full URL, e.g. "http://www.example.com"
    externalUrl: "#",
    // techDetails -- displayed when a user hovers over a project card image
    // (or clicks on mobile)
    techDetails: `Details about the tech stack and processes used.`,
  },
  {
    title: "Project Two",
    id: "projectTwo",
    desktopUrl: "./images/desktop/desktop.png",
    desktopButton: "Check It Out",
    mobileUrl: "./images/mobile/mobile.png",
    mobileButton: "Check This Out",
    showMobile: true,
    externalLink: "Project Two GitHub",
    externalUrl: "#",
    techDetails: `Project Two used a lot of interesting technologies and provided lots of challenges.`,
  },
  {
    title: "Project Three",
    id: "projectThree",
    desktopUrl: "./images/desktop/desktop.png",
    desktopButton: "Desktop View",
    mobileUrl: "./images/mobile/mobile.png",
    mobileButton: "Mobile View",
    showMobile: false,
    externalLink: "Link to Project",
    externalUrl: "#",
    techDetails: `Details about the tech stack and processes used.`,
  },
  {
    title: "Project Four",
    id: "projectFour",
    desktopUrl: "./images/desktop/desktop.png",
    desktopButton: "Desktop View",
    mobileUrl: "./images/mobile/mobile.png",
    mobileButton: "Mobile View",
    showMobile: true,
    externalLink: "Link to Project",
    externalUrl: "#",
    techDetails: `Details about the tech stack and processes used.`,
  },
];

const personalProjects = [
  {
    title: "Project One",
    id: "projectOnePersonal",
    desktopUrl: "./images/desktop/desktop.png",
    desktopButton: "Desktop View",
    mobileUrl: "./images/mobile/mobile.png",
    mobileButton: "Mobile View",
    showMobile: true,
    externalLink: "Link to Project",
    externalUrl: "#",
    techDetails: `Details about the tech stack and processes used.`,
  },
  {
    title: "Project Two",
    id: "projectTwoPersonal",
    desktopUrl: "./images/desktop/desktop.png",
    desktopButton: "Desktop View",
    mobileUrl: "./images/mobile/mobile.png",
    mobileButton: "Mobile View",
    showMobile: true,
    externalLink: "Link to Project",
    externalUrl: "#",
    techDetails: `Details about the tech stack and processes used.`,
  },
  {
    title: "Project Three",
    id: "projectThreePersonal",
    desktopUrl: "./images/desktop/desktop.png",
    desktopButton: "Desktop View",
    mobileUrl: "./images/mobile/mobile.png",
    mobileButton: "Mobile View",
    showMobile: false,
    externalLink: "Link to Project",
    externalUrl: "#",
    techDetails: `Details about the tech stack and processes used.`,
  },
  {
    title: "Project Four",
    id: "projectFourPersonal",
    desktopUrl: "./images/desktop/desktop.png",
    desktopButton: "Desktop View",
    mobileUrl: "./images/mobile/mobile.png",
    mobileButton: "Mobile View",
    showMobile: false,
    externalLink: "Link to Project",
    externalUrl: "#",
    techDetails: `Details about the tech stack and processes used.`,
  },
  {
    title: "Project Five",
    id: "projectFivePersonal",
    desktopUrl: "./images/desktop/desktop.png",
    desktopButton: "Desktop View",
    mobileUrl: "./images/mobile/mobile.png",
    mobileButton: "Mobile View",
    showMobile: true,
    externalLink: "Link to Project",
    externalUrl: "#",
    techDetails: `Details about the tech stack and processes used.`,
  },
  {
    title: "Project Six",
    id: "projectSixPersonal",
    desktopUrl: "./images/desktop/desktop.png",
    desktopButton: "Desktop View",
    mobileUrl: "./images/mobile/mobile.png",
    mobileButton: "Mobile View",
    showMobile: true,
    externalLink: "Link to Project",
    externalUrl: "#",
    techDetails: `Details about the tech stack and processes used.`,
  },
];

// DO NOT CHANGE exports unless you rename these variables throughout the project
export { professionalProjects, personalProjects };
