# Guide For TTU SDC's Hands-On API Workshop

## Updates

### [Please take this poll!](pollev.com/isaacgriswol204)


### 9/7/2016
- The github folder has been updated with a java backend project with all the files we need and zero code. Together we will fill it in and chug along.
- Second, the Angular App has suffered the same fate and has been gutted. We will fill it up together also. We suggest you play and mess with it. Get comfortable with being to open, close and start up the applications. If you have issues, the internet is filled with answers, looking for question like yours. If for some reason, you have found the threshold of the internets wisdom, We will do my best to answer your question through the facebook page. Better yet **please ask**.
- PS: PLEASE, PLEASE, PLEASE. DON’T WAIT TILL THE END TO LET US KNOW YOU ARE NOT COMFORTABLE OR FAMILIAR WITH THE CONCEPTS. WE PROMISE YOU WE DON’T CHARGE FOR QUESTIONS, EXCEPT ON WEEKENDS.

## Overview
This guide is designed to assist those who are attending the TTU SDC's Hands-On API Workshop.

### Workshop
From September 5th to September 8th we will have a guest from industry who is going to be hosting a series of short workshops that show you how to build a simple eCommerce site (including API but not including payment system integration). **The workshop will be interactive!**

### Spring Boot & AngularJS-Demo

The Spring Boot application (demo) does not need a Tomcat server. You should be able to use Spring Boot to run it from Eclipse. 

The AngularJS app should also be able to run from your command line using `npm start` provided you have node, npm and Angular 2 installed. I also recommend having a MySQL community server edition installed. The server can be configure to any database of your choosing, but I will be using MySQL in the demo.

The goal is for you to walk away with a template you can build on and tweak for future projects. 

## What will be covered?
- The language of choice - Java
- Framework - Spring Boot
- Spring Security
- How to program in typescript in Angular 2
- Integrating an AngularJS front-end Application to the API
- RESTful Architecture - (Model, Service & Controller)
- Database - MySQL

## What do I need?
A laptop with the following
- Node and npm (latest version, not LTS) -> [Download](https://nodejs.org/en/)
- Eclipse Luna -> [Download](https://eclipse.org/luna/)
	-  Spring Boot-> [Guide](https://www.mkyong.com/spring/how-to-install-spring-ide-in-eclipse/)
- Atom text editor -> [Download](https://atom.io/)
    - Atom plugin for typescript: [Download](https://atom.io/packages/atom-typescript)
- MySQL -> [Download](https://dev.mysql.com/downloads/workbench/5.2.html), [Guide]( https://dev.mysql.com/doc/workbench/en/wb-installing-windows.html)
- A clone of this repo (The project files)

A willingness to learn!


# Java API
## What is an API anyway and why do I need to know what it is?

Ever wondered what everyone is saying about you on twitter without following them? Then use the [Twitter API](https://dev.twitter.com/rest/public).

Every wondered how all those sites have Google Maps embedded in them? Check out [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorials/).

What about GitHub? [Even they have a API](https://developer.github.com/v3/).

Ever tried to drive you remote controlled car in Austin from New York and build different apps for different functions without rewriting the backend or the controls on the car. Then you need a REST API.

Below are some links that will quench your thirst for knowledge on why you give two cents  or more about REST API’s.

- [Simple Version](https://www.quora.com/What-is-a-REST-API)

- [Technical Version](http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming)

- [Long and Visual Version](http://www.restapitutorial.com/lessons/whatisrest.html)


## First Steps
1) You can download the zip of this repo onto your computer or clone it.
Either way, have a folder containing the *unzipped* files.

2) Go into Eclipse (luna version) and go to **File** > **Import** > **Existing maven projects** 

3) Browse to whereve you saved the project files folder (*unzipped version* of zip file) and open the demo folder.

4) Wait for Eclipse to load the folder and dependencies. You should be able to see when it’s ready by looking at the bottom right corner of the IDE (Eclipse).

## What data are we storing?
We will start by creating classes for the models. (This defines the object and the attributes of the object) in `com.demo.backend.model`

### User
Location: `com.demo.backend.model.User`

Attributes:
```
-Id
-First Name
-Last Name
-User Name
-Password
-Date Created
-Photos owned by user
-Photos liked by users (Photos can also be liked by multiple users)
```
### Comment
Location: `com.demo.backend.model.Comment`

Attributes:
```
-Id
-Content
-Photo commented on multiple times
-Id of the photo commented on
-Name of user commenting
```

### Photo
Location: `com.demo.backend.model.Photo`

Attributes:
```
-Id
-Photo Name
-Title
-Description
-Image
-Date Created
-Name of user who owns the photos
-How many people like the photo
-What comments does the photo have
```

## Dealing with the data


Next we will into `com.demo.backend.dao` and create an interface that accesses the attributes of our object from  the database AKA CrudRepository.

`com.demo.service` and `com.demo.service.impl` relays the user’s request to the dao so that it can retrieve the appropriate object.

`com.demo.controller` interfaces with the front end application by fetching or posting data to the service layer, which in turn does what was stated previously.

 

[Here is a good StackOverflow answer](http://stackoverflow.com/questions/3885675/service-layer-and-controller-who-takes-care-of-what) that explains the concept in finer detail.
 



## Getting Ready To Run
In order to run the java program, right click on the demo folder and go to **Run As Springboot**

In `pom.xml` add

```xml
<dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-data jpa</artifactId>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
</dependency
```


# Angular Front-end
Open the atom editor. Go to **File** > **Open**, and go to the location of the TTU-SDC folder. Inside it, open the AngularApp.

 
In order to run the AngularApp, you first need to open a command prompt or terminal.
Navigate to the location of the AngularApp then run these commands:
```
npm install
npm start
```

## Wait wait, what the heck is Angular?
Let's go straight to the [source](https://angular.io/) for that one.

In fact, Angular actually has a pretty thorough [quick start](https://angular.io/docs/ts/latest/quickstart.html) guide that walks you through setting up a simple Angular 2 application in TypeScript.

### Hold up, [TypeScript](https://www.typescriptlang.org/)?
>TypeScript is a free and open source programming language developed and maintained by Microsoft.  - [Wikipedia](https://en.wikipedia.org/wiki/TypeScript)


We will not be using the quickstart  for our tutorial since we already have template, but for the sake of everyone to be on the same page, frankly, late night reading, please go through these links to be familiar what AngularJS is and why it matters:

 








 
