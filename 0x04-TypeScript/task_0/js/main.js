/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(383);
var external_tslib_default = /*#__PURE__*/__webpack_require__.n(external_tslib_);
;// CONCATENATED MODULE: ./src/main.ts

// Define the Student interface
var main_ts_Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
// Create two students
var student1 = {
    firstName: "Mohamed",
    lastName: "Benlaguroun",
    age: 33,
    location: "morocco",
};
var student2 = {
    firstName: "Ben",
    lastName: "Moha",
    age: 22,
    location: "chichaoua",
};
// Create an array containing the two students
var studentsList = [student1, student2];
// Render the table
var renderTable = function () {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    // Iterate over the students list and append rows to the table
    studentsList.forEach(function (student) {
        var row = tbody.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
};
// Call the renderTable function
renderTable();


/******/ })()
;

