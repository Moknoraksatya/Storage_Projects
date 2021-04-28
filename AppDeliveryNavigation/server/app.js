const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
var cors = require('cors')
fs = require('fs');

app.use(cors())

var mysql = require('mysql');
var pool  = mysql.createPool({
    host: '35.247.155.131',
    port: 3306,
    user: 'smey',
    password: 'smey@amatak!@#$',
    database: 'MSTExpress',
   //  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});
global.pool = pool;
global.lang = 'kh';
global.row_count = 20;

global.verifyTokenSMS = function (req, res, next) {
   var bearerToken = getBearer(req);
   if (bearerToken) {
      jwt.verify(bearerToken,(req.body.phone), function (err, data) {
         if (err) {
            res.status(400).json({
            message: err,
            });
         } else {
            if (data && data.data.smsCode == req.body.smsCode) {
               console.log();
            next();
            } else {
            res.status(400).json({
               message: "invalid_sms",
            });
            }
         }
      });
   } else {
    res.status(400).json({
      message: "invalid_token",
    });
  }
}
// APP
const app_login = require('./api/routes_app/login');
const app_get_sms = require('./api/routes_app/get-sms');
const get_app_version = require('./api/get_app_version');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
   req.header("Access-Control-Allow-Origin", "*");
   req.header("Access-Control-Allow-Credentials", "true");
   req.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
   req.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
   next();
});

var getIP = require('ipware')().get_ip;
app.use(function(req, res, next) {
    var ipInfo = getIP(req);
    console.log(ipInfo);
    next();
});

// APP
app.use('/app/login', requestParams, app_login);
app.use('/app/get-sms', requestParams, app_get_sms);
app.use('/app/get-app-version', requestParams, get_app_version);

app.use('/images', express.static(path.join(__dirname, 'data')))

app.use((req, res, next) => {
   const error = new Error('Not Found');
   error.status = 404;
   next(error);
});

app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
      error:{
         message: error.message
      }
   });
});

function verifyToken(req, res, next) {
   var bearerToken = getBearer(req)
   if(bearerToken) {
      var user = jwt.decode(bearerToken);
      if(user){
         req.userDataFromToken = user.data;
         next();
      }else{
         res.status(401).json({
            message: 'invalid_token',
         }); 
      }
   }else {
      res.status(401).json({
         message: 'invalid_token',
      }); 
   }
}

// Delete Token
function deleteToken(req, res, next) {
   var bearerToken = getBearer(req)
   if(bearerToken) {
     next();
   }
}

function getBearer(req){
   var bearerToken = false;
   const bearerHeader = req.headers['authorization'];
   // console.log(req.headers); 
   
   if(typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      bearerToken = bearer[1];
   }
   return bearerToken;
}

function requestParams(req, res, next) {
   console.log('request', req.params, req.body);
   next();
}

global.generateAlias = function (item){
   var lower = item.toLowerCase();
   var alias = lower.replace(/ /g, '-');
   alias = alias.replace(/&/g, '-');
   alias = alias.replace(/\//g, '-');
   alias = alias.replace(/\\/g, '-');
   alias = alias.replace(/----/g, '-');
   alias = alias.replace(/---/g, '-');
   alias = alias.replace(/--/g, '-');
   return alias;
}

function verifyPermission(req, res, next) {
   var page = req.baseUrl
   var path = req.path
   page = page.replace(/\//g, '');
   path = path.split("/");
   var pathType = path[2] || false
   path = path[1];
   var userData = req.userDataFromToken;
   if(userData.usaType === 1 || (page == 'branch' && pathType == 'all')){  
      console.log(page, pathType);
      next()
   }else{
      var sql = "SELECT `pmaView`, `pmaInsert`, `pmaDelete`, `pmaUpdate` FROM `tblPermissionAdmin` "+
      "JOIN `tblMenuAdmin` ON `pma_madAutoID` = `madAutoID` "+
      "WHERE `pma_usaAutoID` = ? AND `madPageName` = ?";
      var dataSql = [userData.usaAutoID, page];
      pool.getConnection(function(err, connection) {
         if(err){
            res.status(402).json({
                  err: err,
            });
         }else{
            connection.query(sql, dataSql, function (error, results, fields) {
                  connection.release();
                  if(error){
                     res.status(402).json({
                        error: error,
                     });
                  }else{
                     if(results.length > 0){
                        console.log('results', sql, dataSql);
                        
                        var data = results[0];
                        if(path == 'view'){
                           if(data.pmaView == 1){
                              next()
                           }else{
                              res.status(402).json({
                                 message: 'no_permission',
                                 dataSql
                              });
                           }
                        }else if(path == 'insert'){
                           if(data.pmaView == 1){
                              next()
                           }else{
                              res.status(402).json({
                                 message: 'no_permission',
                                 dataSql
                              });
                           }
                        }else if(path == 'delete'){
                           if(data.pmaDelete == 1){
                              next()
                           }else{
                              res.status(402).json({
                                 message: 'no_permission',
                                 dataSql
                              });
                           }
                        }else if(path == 'update'){
                           if(data.pmaUpdate == 1){
                              next()
                           }else{
                              res.status(402).json({
                                 message: 'no_permission',
                                 dataSql
                              });
                           }
                        }else{
                           res.status(402).json({
                              message: 'no_permission',
                              dataSql
                           });
                        }
                     }else{
                        res.status(402).json({
                           message: 'no_permission',
                           dataSql
                        });
                     }
                  }
            });
         }
      });
   }
}
module.exports = app;