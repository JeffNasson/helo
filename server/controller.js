

module.exports={
    getUsers:(req,res,next)=>{
        const db=req.app.get('db')

        db.get_users()
            .then(users=>res.status(200).send(users))
            .catch(err=>{
                res.status(500).send({errorMessage:`oops can't grab the users table`})
                console.log(err)
            })
    },
    post:(req,res,next)=>{
        const {username,password}=req.body
        const db=req.app.get('db')
        // let redir = {redirect:'/dashboard'}

        db.add_user([username,password])
            .then(users=>res.status(200).send(users))
            .catch(err=>{
                res.status(500).send({errorMessage:'Couldnt add a new user'})
                console.log(err)
            })
            

    },
    getUser:(req,res,next)=>{
        const db = req.app.get('db');
        const { username, password } = req.body;
    
        db.login_user([username, password])
          .then(res => {
            res.status(200).send(res);
          })
          .catch(err => console.log(err));
            
    },

    getPosts:(req,res,next)=>{
        const db=req.app.get('db');
        const {author_id,content} = req.body
        
        db.get_posts([author_id,content])
            .then(posts=>res.status(200).send(posts))
            .catch(err=>console.log(err))

    }
}