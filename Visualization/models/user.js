
const mongoose =  require('mongoose');
const fs = require('fs');
const path = require('path');
const { json } = require('body-parser');

const { UserSchema, UserSchemaHour } =  require('../models/schema1');


const User = mongoose.model("user_count_per_day",UserSchema, "user_count_per_day");
const UserHour = mongoose.model("user_count_per_hour",UserSchemaHour, "user_count_per_hour");

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'userinfo.json'
);

const fetchYearsData = cb => {

  var arr1 = [];

  User.find({}, (err, userdata) => {
    if (err) {
        console.log(err)
    }
    arr1.push(userdata);  
    userdata.sort(function(a, b) {
      return b.count - a.count
    })
    let arr = userdata.slice(0,3);
    arr1.push(arr)
    cb(arr1);
  });
} 


const fetchMonthsData = (selData, cb) => {

  var arr1 = [];


  User.find({year: {
    $eq: selData.split("-")[0],
  }}, (err, userdata) => {
    if (err) {
        console.log(err)
    }
    arr1.push(userdata);  
    userdata.sort(function(a, b) {
      return b.count - a.count
    })
    let arr = userdata.slice(0,3);
    arr1.push(arr)
    cb(arr1);
  });
} 


const fetchDaysData = (selData, cb) => {

  var arr1 = [];

  User.find({year: {
    $eq: selData.split("-")[0],
  },month: {
    $eq: selData.split("-")[1],
  }}, (err, userdata) => {
    if (err) {
        console.log(err)
    }
    userdata.sort(function(a, b) {
      return a.day - b.day
    });
    arr1.push(userdata);  
    userdata.sort(function(a, b) {
      return b.count - a.count
    })
    let arr = userdata.slice(0,3);
    arr1.push(arr)
    cb(arr1);
  });
} 


const fetchHoursData = (selData, cb) => {

  var arr1 = [];

  UserHour.find({year: {
    $eq: selData.split("-")[0],
  },month: {
    $eq: selData.split("-")[1],
  },day: {
    $eq: selData.split("-")[2],
  }}, (err, userdata) => {
    if (err) {
        console.log(err)
    }

    arr1.push(userdata);  
    userdata.sort(function(a, b) {
      return b.count - a.count
    })
    let arr = userdata.slice(0,3);
    arr1.push(arr)
    cb(arr1);
  });
} 

module.exports = class Product {

  static fetchAll(cb) {
    fetchYearsData(cb);
  }


  static fetchData(selData,cb) {
    fetchMonthsData(selData,cb);
  }

  static fetchDataDays(selData,cb) {
    fetchDaysData(selData,cb);
  }

  
  static fetchDataHour(selData,cb) {
    fetchHoursData(selData,cb);
  }
  

};
