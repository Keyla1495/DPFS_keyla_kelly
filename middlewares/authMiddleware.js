module.exports = (req, res, next) => {
    if (!req.session.user) {
      return res.redirect('/users/login');
    }
    next();
  };
  
  module.exports = (req, res, next) => {
    if (req.session.userLogged) {
      return res.redirect('/users/profile');
    }
    next();
  };
  