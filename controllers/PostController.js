const posts = require('../models/posts');
const uuid = require('uuid'); 

class PostController {
    viewPostDetail (req, res) {
        const item = posts.find((item)=> item.id === req.params.id);
        res.render('posts/detail', {
            data: item
       });
    }

    createPost (req,res) {
        res.render('posts/create', {
            title:'Tạo post'
        })
    }

    editPost (req,res) {
        const item = posts.find((item)=> item.id === req.params.id);
        res.render('posts/edit', {
            title:'Edit post',
            data:item
        })
    }

    addPost (req,res) {
        const postId = uuid.v4();
        const comments = [];
        req.body.id = postId;
        req.body.comments = comments;
        const data = req.body;
        const post = posts.find((item) => item.id === req.body.id);
        if (post) {
            res.redirect('back');
        }
        posts.push(data);
    
        res.redirect('/');
    }

    update (req,res) {
        let pos;
     
        const data = req.body;
        const post = posts.find((item, index) => {
            if (item.id === req.body.id){
                pos = index;
                return item;
            }
        });

        if (post) {
            posts[pos].title = data.title;
            posts[pos].description = data.description;
            posts[pos].content = data.content;;
        }

        res.redirect('/');
    }

    deleteBlog(req, res) {
        const postId = req.params.id;
        const postIndex = posts.findIndex(post => post.id === postId);
      
        if (postIndex !== -1) {
          posts.splice(postIndex, 1);
          res.redirect('/');
        } else {
          res.redirect('back');
        }
    }

    addComment(req, res) {
        const comment = req.body.comment;
        const currentDate = new Date();
        // Định dạng ngày/tháng/năm
        const formattedDate = currentDate.toLocaleDateString(); 
        
        const post = posts.find((item) => item.id === req.params.id);
        // Chuyển đổi comment thành chuỗi trước khi đưa vào đối tượng
        post.comments.push({ comment: comment.toString(), formattedDate: formattedDate }); 
        res.redirect('back');
    }

}

module.exports = new PostController;
