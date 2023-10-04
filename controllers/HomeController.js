const posts = require('../models/posts');

class HomeController  {
    // Home Page
    index(req, res) {
        res.render('Home', {
            title: 'Blog trang chủ', 
            data: posts,
        })
    }
}

// export a class
module.exports = new HomeController;