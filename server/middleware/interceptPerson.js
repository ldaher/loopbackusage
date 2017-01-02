module.exports = function(){
    return function interceptorPerson(req, res, next){
        console.log(req);
        next();
    }
}