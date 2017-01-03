module.exports = function () {
    return function bodyParsing(req, res, next) {
        console.log("Printing out req added property: " + req.surName);
        if(req.url === '/greet'){
            next();
            return;
        }
        res.end("Luciano " + req.surName);
    }
}