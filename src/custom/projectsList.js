/* The projects below have placeholder content that should be updated
The first project listed has comments on each section to clarify its purpose

The number of projects included is just an example: 
Feel free to add or remove projects from either array 

If an array is empty, that section will be removed from the page
(So you will never have a section header with no projects underneath)

Only values should be changed; do not update or remove key names 
unless you are updating them throughout the repo 
If you want to leave a property blank, keep the key
and leave the value empty, e.g.: mobileUrl: ""; */

const professionalProjects = [
  {
    // title appears on project card and screenshot modals
    title: "Project One",
    // id should be unique; no two projects should have the same id
    // will be used for connecting modals to projects
    // id SHOULD NOT BE BLANK
    id: "projectOne",
    // desktopUrl should be the relative path from template.html to the desktop image for project
    // used on project card and desktop screenshot modal
    // desktopUrl SHOULD NOT BE BLANK
    desktopUrl: "./images/desktop/desktop.png",
    // desktopButton changes the text displayed on the desktop modal button
    desktopButton: "Desktop View",
    // mobileUrl should be the relative path from template.html to the mobile image for project
    // used on mobile screenshot modal
    mobileUrl: "./images/mobile/mobile.png",
    // mobileButton changes the text displayed on the mobile modal button
    mobileButton: "Mobile View",
    // Set showMobile to false if you don't want to display a mobile screenshot (will remove mobile modal & button)
    // Leave mobileUrl as an empty string if you don't want to include this
    showMobile: true,
    // externalLink is the text displayed at the bottom of the project card on its link out
    externalLink: "Link to Project",
    // externalUrl is where externalLink will send users that click
    // should be a full URL, e.g. "http://www.example.com"
    externalUrl: "#",
    // techDetails is displayed when a user hovers over a project card image
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
    showMobile: true,
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
  {
    title: "Project Five",
    id: "projectFive",
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
    title: "Proper Six",
    id: "projectSix",
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

export { professionalProjects, personalProjects };
