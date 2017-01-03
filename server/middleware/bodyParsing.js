module.exports = function () {
    return function bodyParsing(req, res, next) {
        console.log("Printing out req added property: " + req.surName);
        res.write("Luciano " + req.surName);
    }
}