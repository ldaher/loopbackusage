'use strict';

module.exports = function (Person) {
    Person.getPerson = function (req, res, cb) {
        console.log(req);
        res.end("Hello  Persons!");
    };

    Person.remoteMethod('getPerson', {
        accepts: [{ arg: 'req', type: 'object', 'http': { source: 'req' } },
        { arg: 'res', type: 'object', 'http': { source: 'res' } }],
        http: {
            verb: 'get',
            path: '/greet'
        }
    });
};