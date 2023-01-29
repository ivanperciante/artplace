function authMiddleware(req, res, next){
    if(req.session && req.session.userLogged){
      
      next();
    }
    else{
      res.redirect('/users/login')
    }
  }

module.exports = authMiddleware;