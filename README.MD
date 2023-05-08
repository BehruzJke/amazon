# Test automation framework for Amazon app store

## Project overview

This is automation framework for Amazon app. Amazon app is place where you can download apps.

## Framework overview

The framework is build on Appium client WebdriverIO. 

## Installation 

### Pre requisites :

- JAVA installed and [JAVA_HOME set-up](https://stackoverflow.com/questions/24641536/how-to-set-java-home-in-linux-for-all-users)

- node.js and npm [installed on your system](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- [Andoid studio installed](https://developer.android.com/studio/install) and [ANDROID_HOME set up](https://stackoverflow.com/questions/26356359/error-android-home-is-not-set-and-android-command-not-in-your-path-you-must)
 
- Virtual device up and running on Android studio with exact characteristics in [configuration file](wdio.conf.js)
### Install node packages:

`npm install`


### Execute tests:

`npx wdio`

