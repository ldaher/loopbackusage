'use strict';

module.exports = function (Person) {
    Person.getPerson = function (req, res, next) {
        console.log(req);
    };

};
