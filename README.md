# Smart Group Financial

## Project Overview 
**Problem Statement**: 
When you’re on a trip with a group of friends, Person A spends $95 on food, Person B spends about $50 on gas, Person C spends $100 on amenities. Then, it will take a lot of time to figure out who should pay back an amount of money to the right person. Some groups use Excel, but they have to create their own formula, which might result in mistakes and take even more time to fix and re-calculate again, or there is a possibility that they may request the wrong amount of money. This can lead to problems with trust issues, misunderstandings, or uneven money distribution. 
**Stakeholders**: This app focuses on any travel group
**Solution**: 
We want to develop an application that will serve as a platform for various groups to manage their events, event members, and finances involved with the event. The app will allow users to create different parties/trips/planners, invite other users of the app to be apart of the event, and enter the amount of money that each person has contributed to the event. Finally, the app will assist in calculating the total amount spent on the event, and then generate the amount of money that one person in the group may owe another. This will in effect create a way to fairly distribute the expenses used for the event.
**Possible Data Model**:
Entities
- User (first name, last name, like a profile, etc., 1 user can create/own many events/trips)
- Events: id, name, location, time, 1 event will contain a list of users participate in that specific event, multiple categories, a history of who changes the price
- Categories: (Title, amount of money)
- Groups: store a list of users, can store many events
- History of events: List of users, and event’s information 

## System Environment 

HW/SW: Desktop Web Browser, Mac, Windows, Linux

**Overview**:
The architecture of our application is based on a typical MVC model. Our Client tier (View) will be written in Javascript, HTML, and CSS, using ReactJS as the framework. This level of the architecture is what the user will interact with to access the features of our application. The Business Logic Tier (Controller) will be written using NodeJs and ExpressJS, and this tier represents the Application Server that will act as the bridge of communication for the Client Tier and Database Tier. This tier will serve HTML pages to the user's device and accept HTTP requests from the user and follow with the appropriate response. Our Database Tier (Model) will be hosting MySQL as our application’s Relational Database Management System. This is where we will store all of the crucial data our application needs to function.

## Installation

To clone and run this repository you'll need:

- [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

Clone this repository

```
git clone git@github.com:CS157A-Team-31/Smart-Group-Financial.git
```

Install the dependencies and devDependencies.

```
cd server/ && npm i
```

Start the server. you need to go to server directory first. `cd server`, and run this command:

```
npm run dev
```

Open 'http://localhost:8080/'

Testing other routes: 'http://localhost:8080/users'

## Server Composition:

All the logic of fetching/retrieving data and setup Database

```
server
├── Controller  - Storing all APIs of the app including POST, PUT, DELETE
├── model       - Model of each object within database
└── App.js      - Everything a server needs
```

## Front-end Composition (React.js):

- [React.js](https://reactjs.org/)

## Authors

**Calvin Nguyen** - [NivlaCuong](https://github.com/NivlaCuong)
**Christian Castro** - [ChristianCastr0](https://github.com/ChristianCastr0)
**Pranika Bedi** - [pranikabedi](https://github.com/pranikabedi)

## License

Use of this source code is governed by an MIT-style license.
