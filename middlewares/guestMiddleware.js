function guestMiddleware(req, res, next){
      if(req.session && req.session.userLogged){
        return res.redirect('/')
      }
      else{

        next();

      }
}

module.exports = guestMiddleware;