# AIDS/LifeCycle SMS Service

- [Overview](#overview)
- [Requirements](#requirements)
- [Vendor Stylesheets and JavaScript](#vendor-stylesheets-and-javascript)
	- [Project dependencies](#project-dependencies)
- [Express Server](#express-server)
- [Setup](#setup)
- [3rd Party Documentation](#3rd-party-documentation)
- [Todo / Wish list](#todo--wishlist)

## Overview

## Requirements

### Vendor Stylesheets and JavaScript

#### Project dependencies:
- Shards CSS/JS
- Bootstrap 4 CSS/JS
- jQuery (Bootstrap dependency)

These files have been committed for the following reasons:


1) Eventually I would like to add a service worker to cache the the files
2) I work offline while traveling, so it's nice to have the files
3) We travel to areas will little to no data service JS and CSS shouldn't slow or block the page from rendering

### Express Server

The Express generator was used to create the project.

To start the server run: `npm run start`

### Setup 

```
git clone [repo name]
npm install
git checkout -b [your branch name]
```

Twilio API keys: The keys are stored in a `.env` file located in the root of the project. Contact _@jefflowy_ for access to the Twilio API keys.

___Request___: As you work, please keep your branch up-to-date with the Master branch. This save a lot of time and headaches and ensure your work is committed to Master.

### 3rd Party Documentation 

- [Bootstrap 4](https://getbootstrap.com/)
- [jQuery 3.2.1](http://api.jquery.com/)
- [Shards UI](https://designrevision.com/docs/shards/)
- [Socket.io](https://socket.io/)
- [Twilio](https://www.twilio.com/docs/)

### Todo / Wish list
- [ ] Separate handlebars `index.hbs` into components
- [ ] Connect to Twilio API
- [ ] Define/plan DB schemas
- [ ] Create DB schemas
- [ ] Create dashboard of channels
- [ ] Create layout for each channel
- [ ] Service worker (cache CSS and JS)
- [ ] Add support for [Socket.io](https://socket.io/) - append new message to top of container when text sent/received