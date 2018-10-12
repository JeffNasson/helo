import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Auth extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }
    credentials(){
        let uri = `${encodeURIComponent(window.location.origin)}/dashboard`
        const{username,password} = this.state
        axios.post('/api/users',{username,password})
             .then(res=>{
                 this.setState=({
                     username:res.data.username,
                     password:res.data.password
                 })
                 
             })
            //  window.location=`localhost:3000/#/dashboard`
    }

    findUser(id){
        const {username,password}=this.state
        
        axios.post(`/api/users/${id}`,{username,password})
             .then(res=>{
                 this.setState({
                     username:res.data.username,
                     password:res.data.password
                 })
             })
    }

    render(){
        return(
            <div>
                Auth
                <input placeholder='username' value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} />
                <input placeholder='password' value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} />
                <a href='http://localhost:3000/#/dashboard'><button onClick={this.findUser.bind(this)}>Login</button></a>
               <a href='http://localhost:3000/#/dashboard'><button onClick={this.credentials.bind(this)}>Register</button></a>
            </div> 
        )
    }
}