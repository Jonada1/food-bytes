# Food Bytes

## Requirements
Install [NodeJs](https://nodejs.org/en/) on your machine, following the official tutorial.

## Initialise ionic and cordova engines
```npm install -g ionic cordova```

## Download project from GitHub
```
git clone https://github.com/Jonada1/food-bytes.git
cd food-bytes
```
Install ionic and cordova platform dependencies:
```
ionic cordova platform add browser
ionic cordova platform add ios
ionic cordova platform add android
```

## Running the app in the browser for development
```
ionic serve
```
Or
```ionic cordova run browser```

Deploy your application in Device (for iOS, replace android with ios below):
```
npm install -g native-run
ionic cordova platform add android
```

## Running the app in android device
```
ionic cordova run android
```

#Screenshots of Food Bytes
TODO

#Created by
TODO
