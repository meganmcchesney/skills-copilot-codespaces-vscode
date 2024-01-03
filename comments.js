//create web server
var express = require('express');
var router = express.Router();
var path = require('path');
//create mysql connection
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'opentutorials'
});
db.connect();
//create template
var template = require('../lib/template.js');
//create cookie
var cookie = require('cookie');
var auth = require('../lib/auth.js');
//create shortid
var shortid = require('shortid');
//create sanitize-html
var sanitizeHtml = require('sanitize-html');
//create multer
var multer = require('multer');
var _storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/user');
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + path.extname(file.originalname));
    }
});
var upload = multer({
    storage: _storage
});
//create fs
var fs = require('fs');
//create bcrypt
var bcrypt = require('bcrypt');
//create nodemailer
var nodemailer = require('nodemailer');
//create smtpTransport
var smtpTransport = require('nodemailer-smtp-transport');
//create crypto
var crypto = require('crypto');

//create transporter
var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: '
