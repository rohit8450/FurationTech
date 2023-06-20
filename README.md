# CRUD Backend API

## Problem Statement
The objective of this assignment is to assess your skills and understanding of backend development using Express.js and MongoDB. You will be required to create a simple RESTful API that performs CRUD (Create, Read, Update, Delete) operations on a collection in a MongoDB database.

## Introduction

Creating a **CRUD Backend API** where we can perform Create,Read, Update, Delete Operation using Nodejs, ExpressJs, MongoDB.

<br/>


## 🔗 Important Links

> ## Checkout the Website [CRUD Operation Backend API](https://furationtech.onrender.com)
> ## Backend API [Sample Postman Documentation Link](https://documenter.getpostman.com/view/25692338/2s93z3ejrm)

<br />

## Features

- **Create New Item**
<p>Users can able to create a new item by entering details such title, description, imgUrl, size, color, price .</p>

- **Get List Items**
<p>Users can able to view the list of all added items.</p>

- **Get Specific Item**
<p>User can able to view the Specific Item based on the id.</p>

- **Update Specific Item**
<p>User can able to update the Specific Item based on the id.</p>

- **Delete Specific Item**
<p>User can able to delete the Specific Item based on the id.</p>


<br/>


## Routes & URL


- **/api/items/**
  <p>To add a new item hit the following URL with a post request:</p>
  http://furationtech.onrender.com/api/items

  - **/api/items/**
  <p> To Display the list of all item hit the following URL with a get request:</p>
  https://furationtech.onrender.com/api/items

- **/api/items/:id**
  <p>To get the details of specific items, hit the following URL with a get request:</p>
  http://furationtech.onrender.com/api/items/:id

- **/api/items/:id**
  <p>To update the existing specific item, hit the following URL with a put request:</p>
  https://furationtech.onrender.com/api/items/:id
 
 - **/api/items/:id**
  <p>To delete the existing specific item, hit the following URL with a delete request: </p>
  http://furationtech.onrender.com/api/items/:id

  <br/>

## Tools Used

 <p align="justify">
<img height="140" width="140" src="https://www.startechup.com/wp-content/uploads/January-11-2021-Nodejs-What-it-is-used-for-and-when-where-to-use-it-for-your-enterprise-app-development.jpg" alt="nodeJS logo">
<img height="140" width="140" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png" alt="expressjs logo">
<img height="140" width="140" src="https://g.foolcdn.com/art/companylogos/square/mdb.png" alt="mongoDB logo">
<img height="140" width="140" src="https://mms.businesswire.com/media/20210806005076/en/761650/22/postman-logo-vert-2018.jpg" alt="postman logo">
<img height="140" width="140" src="https://www.pngitem.com/pimgs/m/13-131098_visual-studio-code-logo-hd-png-download.png" alt="vscode logo">
</p>

- Version Control System: Git
- VCS Hosting: GitHub
- Integrated Development Environment: VSCode
  <br/>
  <br/>

## Requirements

For development, you will only need Node.js and a node global package installed in your environement and mongodb for database.

### Node

- Node Installtion on Windows
  Go on to the [official Node.js website](https://nodejs.org/en/) and download the installer. Also, be sure to have `.git` available in your PATH,
  `npm` might need it (You can find [git](https://git-scm.com/)).
- Other operating System
  You can find more information about the installation on the official [Node.js website](https://nodejs.org/en/) and the official [NPM website](https://www.npmjs.com/).

If the installation was successful, you should be able to run the following command.

```
$ node --version
v16.13.0

$ npm --version
8.2.0
```

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

```
$ npm install npm -g

```

<br/>

## To run the project on your local machine:

1. Open terminal.

2. Change the current working directory to the location where you want the cloned directory.

   ```
   $ git clone https://github.com/rohit8450/FurationTech

   ```

3. Install all the dependencies by running :

   ```
   npm install

   ```

4. Run npm start to run the project at local host, port 8000:

   ```
   $ npm start

   ```

<br/>

## Configuration

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting
- one more setting
- Another one more setting

## Screens

<p align="justify">
   
### Add new Item:    
<img src="/ScreenShots/AddNewItem.png" />
   
### Get List Item:
<img src="/ScreenShots/GetListItem.png" />
   
### Get Specific Item:    
<img src="/ScreenShots/GetSpecificItem.png" />

### Update Specific Item:

<img src="/ScreenShots/UpdateSpecificItem.png" />

### Delete Specific Item:

<img src="/ScreenShots/DeleteSpecificItem.png" />
 
</p>
<br/>
