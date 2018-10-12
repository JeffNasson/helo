require('dotenv').config();
const express = require('express');
const session = require('express-session');
const axios = require('axios');
const massive = require('massive');
const ctrl = require('./controller.js');
const bodyParser = require('body-parser');

//initialize express
const app=express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

//destructure values from .env so we can call them by their original file names
const{SERVER_PORT,REACT_APP_DOMAIN,REACT_APP_CLIENT_ID,CLIENT_SECRET,CONNECTION_STRING,SECRET} = process.env

//connect to db
massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    console.log('db connected')
}).catch(err=>console.log(err))

app.use(session({
    secret:SECRET,
    resave:false,
    saveUninitialized:false
}))
let authBypass = async(req,res,next)=>{
    if(process.env.NODE_ENV){
        const db = req.app.get('db')
        let res = await db.session_user();
        req.session.user = res[0];
        next();
    } else{
        next();
    }
}

// app.get(`/auth/callback`,async(req,res)=>{
//     //get code from req.query.code
//     let payload = {
//         client_id: REACT_APP_CLIENT_ID,
//         client_secret: CLIENT_SECRET,
//         code: req.query.code,
//         grant_type: 'authorization_code',
//         redirect_uri: `http://${req.headers.host}/auth/callback`
//       }
//       // post request with code for token
//       let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
//       // use token to get user data
//       let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)

//       console.log(userRes)
//       let {email,picture,sub,name} = userRes.data
//       //check if user already exists in our db
//       const db = app.get(`db`)
//       let foundCustomer = await db.find_customer([sub])
//       console.log('test')
//       if(foundCustomer[0]){
//           //found user existing in the db, put returned user on session
//           req.session.user = foundCustomer[0];
//       } else {
//           //no user was found by that google id. create new user in db
//           let createdCust = await db.create_customer([name,sub,picture,email])
//           req.session.user = createdCust[0];
//       }
//       res.redirect(`/#/private`)
// })

app.get('/api/users',ctrl.getUsers);
app.get('/api/posts',ctrl.getPosts);
app.post('/api/users',ctrl.post);
app.post('/api/login',ctrl.getUser);




app.listen(SERVER_PORT,()=>console.log(`Listening on port: ${SERVER_PORT}`));