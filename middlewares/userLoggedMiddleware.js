function userLoggedMiddleware(req, res, next){
    res.locals.islogged = false;

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.user = req.session.userLogged
    }
    next();
}

module.exports = userLoggedMiddleware;