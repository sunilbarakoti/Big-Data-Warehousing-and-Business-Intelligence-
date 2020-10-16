const Users = require('../models/user');


exports.getUsersbyYear = (req, res, next) => {

  Users.fetchAll(users => {
    res.render('user/userinfo', {
      users: users,
      pageTitle: 'All Users',
      path: '/getusers'
    });
  });
};

exports.getUsersbyMonth = (req, res, next) => {

  const selDate = req.body.userdata;

  Users.fetchData(selDate, users => {
    res.setHeader("Content-Type", "text/html");
    res.render('user/userinfo', {
      users: users,
      pageTitle: 'All Users',
      path: '/getusersbymonths'
    });
  });

};


exports.getUsersbyDay = (req, res, next) => {

  const selDate = req.body.userdata;

  Users.fetchDataDays(selDate, users => {
    res.setHeader("Content-Type", "text/html");
    res.render('user/userinfo', {
      users: users,
      pageTitle: 'All Users',
      path: '/getusersbydays'
    });
  });
};

exports.getUsersbyHour = (req, res, next) => {

  const selDate = req.body.userdata;

  Users.fetchDataHour(selDate, users => {
    res.setHeader("Content-Type", "text/html");
    res.render('user/userinfo', {
      users: users,
      pageTitle: 'All Users',
      path: '/getusersbyhours'
    });
  });
};
