const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const moment = require("moment-timezone");
const currentPath = process.cwd();
const csvtojsonV2=require("csvtojson");
const pdfMakePrinter = require('pdfmake/src/printer');

const app = express();
app.set("port", process.env.PORT || 5000);
let currentTime = moment();
let estTimeStamp = moment.tz(currentTime, "America/Toronto").format();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
}) 

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(
      "Express server listening on port %d in %s mode",
      server.address().port,
      app.settings.env + "-" + estTimeStamp
    );
  });

  app.get("/", (req, res) => {
    console.log("Time Stamp :" + estTimeStamp);
    res.send("Home Page");
  });

  app.get("/search", (req, res) => {
    console.log("Time Stamp :" + estTimeStamp);
    var response = require(currentPath+'/staticfiles/product_grid.json');
    console.log("file path is "+currentPath);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  });

  //Materials Inventory - materials.csv

  app.get("/materials", (req, res) => {
    console.log("Time Stamp :" + estTimeStamp);
    var csvFilePath = currentPath+'/staticfiles/Materials Inventory - materials.csv';
    csvtojsonV2().fromFile(csvFilePath).then((jsonObj)=>{
    console.log(jsonObj);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonObj));})
  });

  app.get("/vendors", (req, res) => {
    console.log("Time Stamp :" + estTimeStamp);
    var csvFilePath = currentPath+'/staticfiles/Materials Inventory - vendors.csv';
    csvtojsonV2().fromFile(csvFilePath).then((jsonObj)=>{
    console.log(jsonObj);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonObj));})
  });

  app.get("/manufacturers", (req, res) => {
    console.log("Time Stamp :" + estTimeStamp);
    var csvFilePath = currentPath+'/staticfiles/Materials Inventory - manufacturers.csv';
    csvtojsonV2().fromFile(csvFilePath).then((jsonObj)=>{
    console.log(jsonObj);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonObj));})
  });


  app.get("/images/:id", (req, res) => {
    console.log("file name requested :" + req.params.id);
    var imageFilePath = currentPath+'/images/'+req.params.id;
    res.sendFile(imageFilePath);
  });


  app.get("/datasheets/:id", (req, res) => {
    console.log("file name requested :" + req.params.id);
    var imageFilePath = currentPath+'/images/'+req.params.id;
    res.sendFile(imageFilePath);
  });


  // const docDefinition = {
  //   content: ['This will show up in the file created']
  // };
  
  // generatePdf(docDefinition, (response) => {
  //   res.setHeader('Content-Type', 'application/pdf');
  //   res.send(response); // Buffer data
  // });