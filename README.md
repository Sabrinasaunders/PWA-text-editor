# PWA-text-editor

## Project Description

A study in creating a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

## Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Deployment](#deployment)
- [Collaborators](#collaborators)
- [Resources](#resources)
- [License](#License)

## Introduction

User Story
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
Acceptance Criteria
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application

## Installation

See below for a screenshot of the project.

Showing commands in the terminal.
![Showing commands in the terminal](<assets/images/Screenshot 2024-06-02 at 12.02.50 PM.png>)
Below is the screenshot of the text editor "Just Another Text Editor (J.A.T.E)":
![screenshot of text editor](<assets/images/Screenshot 2024-06-02 at 12.03.51 PM.png>)
Below is screenshot of application's manifest.json file:
![screenshot of manifest.json](<assets/images/Screenshot 2024-06-02 at 12.05.30 PM.png>)
Below is the screenshot of content in the text editor has been retrieved from the IndexedDB
![Indexeddb](<assets/images/Screenshot 2024-06-02 at 12.13.10 PM.png>)
![alt text](<assets/images/Screenshot 2024-06-02 at 12.14.24 PM.png>)

## Deployment

[Link to the GitHub repo for this project](https://github.com/Sabrinasaunders/)

[Link to the deployed project on Render](https://pwa-text-editor-1-rof3.onrender.com)


## License

This project utilizes the standard MIT License.

