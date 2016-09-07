# Guide For TTU SDC's Hands-On API Workshop

## Updates
The github folder has been updated with a java backend project with all the files we need and zero code. Together we will fill it in and chug along.

 

Second, the Angular App has suffered the same fate and has been gutted. We will fill it up together also. We suggest you play and mess with it. Get comfortable with being to open, close and start up the applications. If you have issues, the internet is filled with answers, looking for question like yours. If for some reason, you have found the threshold of the internets wisdom, We will do my best to answer your question through the facebook page. Better yet **please ask**.

 

PS: PLEASE, PLEASE, PLEASE. DON’T WAIT TILL THE END TO LET US KNOW YOU ARE NOT COMFORTABLE OR FAMILIAR WITH THE CONCEPTS. WE PROMISE YOU WE DON’T CHARGE FOR QUESTIONS, EXCEPT ON WEEKENDS.

## Overview
This guide is designed to assit those who are attending the TTU SDC's Hands-On API Workshop.

### Workshop
From September 5th to September 8th we will have a guest from industry who is going to be hosting a series of short workshops that show you how to build a simple eCommerce site (including API but not including payment system integration). **The workshop will be interactive!**

### SpringBoot & AngularJS-Demo

The springboot application (demo) does not need a Tomcat server. You should be able to use spring boot to run it from intellij or eclipse. For the sake of the tutorial "YOU WILL NEED TO HAVE SPRING TOOL SUITE INSTALLED". There is limited time for the demo, so I will jump right into the code.

The AngularJS app should also be able to run from your command line using "npm start" provide you have node, npm and Angular 2 installed. I also recommend having a MySQL community server edition installed. The server can be configure to any database of your choosing, but I will be using MySQL in the demo.

The goal is for you to walk away with a template you can build on and tweak for future projects. Looking forward to seeing you folks on the 6th.

## What will be covered?
Course will cover:
- The language of choice - Java
- Framework - Spring Boot
- Spring Security
- How to program in typescript in Angular 2
- Integrating an AngularJS front-end Application to the API
- RESTful Architecture - (Model, Service & Controller)
- Database - MySQL

## What do I need?
A laptop with the following
- Node and npm (latest version, not LTS) -> https://nodejs.org/en/
- Eclipse Luna + Spring -> https://www.mkyong.com/spring/how-to-install-spring-ide-in-eclipse/
- Atom text editor -> https://atom.io/
    - Atom plugin for typescript: https://atom.io/packages/atom-typescript
- MySQL -> https://dev.mysql.com/downloads/workbench/5.2.html,  https://dev.mysql.com/doc/workbench/en/wb-installing-windows.html
- A clone of this repo (The project files)

A willingness to learn!


# Java API
## What is an API anyway and why do I need to know what it is?

Ever wondered what everyone is saying about you on twitter without following them? Then use the twitter API: https://dev.twitter.com/rest/public

Ever tried to drive you remote controlled car in Austin from New York and build different apps for different functions without rewriting the backend or the controls on the car. Then you need a REST API.

Below are some links that will quench your thirst for knowledge on why you give two cents  or more about REST API’s.

- Simple Version: https://www.quora.com/What-is-a-REST-API

- Technical Version: http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming
 

- Long and Visual Version: http://www.restapitutorial.com/lessons/whatisrest.html


## First Steps
1) You can download the zip of this repo onto your computer or clone it.
Either way, have a folder containing the *unzipped* files.

2) Go into Eclipse (luna version) and go to **File** > **Import** > **Existing maven projects** 

3) Browse to whereve you saved the project files folder (*unzipped version* of zip file) and open the demo folder.

4) Wait for Eclipse to load the folder and dependencies. You should be able to see when it’s ready by looking at the bottom right corner of the IDE (Eclipse).

## Model Classes
We will start by creating a Model Class (This defines the object and the attributes of the object) in `com.demo.backend.model`

Classname: `User`
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
Classname: `Comment`
```
-Id
-Content
-Photo commented on multiple times
-Id of the photo commented on
-Name of user commenting
```

Classname: `Photo`
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

## Data Access Objects
Next we will into `com.demo.backend.dao` and create an interface that accesses the attributes of our object from  the database AKA CrudRepository.

`com.demo.service` and `com.demo.service.impl` relays the user’s request to the dao so that it can retrieve the appropriate object.

 

`com.demo.controller` interfaces with the front end application by fetching or posting data to the service layer, which in turn does what was stated previously.

 

Here is a good stack overflow answer that explains the concept in finer detail:
 

http://stackoverflow.com/questions/3885675/service-layer-and-controller-who-takes-care-of-what

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

 
In order to run the AngularApp you should be able to go to the command line and open it and cd into the Angular App and write npm install, then after it is done npm start. Here is a set of instructions

 

Feel free to go through the whole resource, but for the  purpose of this tutorial the Navigating directories section will be most helpful. Please read it before hand to save everyone some time: https://www.learnenough.com/command-line-tutorial#sec-navigating_directories

 

We will not be using the quickstart for our tutorial since we already have template, but for the sake of everyone to be on the same page, frankly, late night reading, please go through this link to be familiar what AngularJS is and why it matters:

 

https://angular.io/docs/ts/latest/quickstart.html






 
