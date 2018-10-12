

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
    getUser:async(req,res,next)=>{
        const {id} = req.params;
        const {username,password} = req.body
        const db=req.app.get('db')

        let foundUser = await db.find_user([id])
            if(foundUser[0]){
                req.session.user = foundUser[0];
            } else {
                let newUser = await db.add_user([username,password])
                req.session.user = newUser[0]
            }
    },
}