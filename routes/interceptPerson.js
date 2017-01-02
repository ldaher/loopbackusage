module.export = function(){
    return function myInterceptorPerson(req, res, next){
        console.log(req);
        next();
    }
}