<img src="static/images/logo-blue-450px-github.png">

- [Overview](#overview)
- [Requirements](#requirements)
- [Vendor Stylesheets and JavaScript](#vendor-stylesheets-and-javascript)
	- [Project dependencies](#project-dependencies)
- [Express Server](#express-server)
- [Setup](#setup)
- [3rd Party Documentation](#3rd-party-documentation)
- [Todo / Wish list](#todo--wishlist)

## Overview

AIDS/LifeCycle sends 20-25 messages to all on-event participants over the course of 7 days. This totals close to 60,000 individual text messages.
### Types of Messages
- Emergency alert system if there is a situation during the event.

- Communication between the production team and event volunteers during the event. Requires 2 way group texting that an administrator can control who can receive texts and who can respond to texts.

- Staff communication and updates (meeting times and locations, call times, private updates).

### Vendor Stylesheets and JavaScript

#### Project dependencies:
- Shards CSS/JS
- Bootstrap 4 CSS/JS
- jQuery (Bootstrap dependency)

### Express Server

#### Setup
```
git clone git@github.com:jeffreylowy/alc-sms.git
npm install
git checkout -b [your branch name]
```

### Firebase Functions

First switch to the firebase directory <br />
```cd firebase```

Deploy only Firebase functions <br />
```firebase deploy --only functions```

Deploy a single Firebase function <br />
```firebase deploy --only functions:twilio```

### Twilio

#### API Keys

The keys are stored in a `.env` file located in the root of the project. Contact _@jefflowy_ for access to the Twilio API keys.

#### Quick start documentation

| Title                                                        | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Twilio Quest](https://www.twilio.com/quest/welcome)         | TwilioQuest is an interactive, self-paced game where you learn how to use  products, features, and concepts. |
| [Getting Started with Twilio](https://www.youtube.com/watch?v=rrx4ux-hChw) (6:30) | Getting started video                                        |
| [Launch an SMS app in 5 minutes](https://www.youtube.com/watch?v=qnrtIUBlnzk) (5:12) | Learn how to configure and deploy an SMS broadcast application with Twilio functions. You can use this app to broadcast SMS messages to large numbers of people who have subscribed to your updates. |


### 3rd Party Documentation 

- [Bootstrap 4](https://getbootstrap.com/)
- [Shards UI](https://designrevision.com/docs/shards/)
- [Socket.io](https://socket.io/)
- [Twilio](https://www.twilio.com/docs/)

### Todo / Wish list
- [x] Replace Handlebars with Next.js and componentize page elements.
- [x] Connect to Twilio API
- [x] Create dropdown of channels 
- [x] Create dynamic route for each channel
- [ ] Service worker (cache CSS and JS)
- [ ] Add support for [Socket.io](https://socket.io/) - append new message to top of container when text sent/received