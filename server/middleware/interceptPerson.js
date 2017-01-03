module.exports = function(){
    return function interceptorPerson(req, res, next){
        if(!req.hasOwnProperty('surName')){
            req.surName = "Daher";
        }
        next();
    }
}