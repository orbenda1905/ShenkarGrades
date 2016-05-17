'use strict';

var grades = require('./studGrades.js');
grades.connectToDB();
//grades.getAllExcellenceStudent();
//grades.getStudGrade(1);
//grades.getExcellenceByYear(3);
var express = require('express');
var app = express();

var port = process.env.PORT || 3001;

app.get('/specific/:studeId', function (req, res) {
	grades.getStudGrade(req.params.studeId, res);
});

app.get('/excel', function (req, res) {
	grades.getAllExcellenceStudent(res);
});

app.get('/excel/:year', function (req, res) {
	grades.getExcellenceByYear(req.params.year, res);
});

app.get('*', function(req, res) {
	res.send("you must be more specific!!:<br>" +
			 "go to /excel to see all the good students<br>" +
			 "go to /excel/:year to see all good students from this particular year<br>" +
			 "go to /specific/:studentId to see specific student data");
});

app.listen(port);
console.log("listening on port " + port);

