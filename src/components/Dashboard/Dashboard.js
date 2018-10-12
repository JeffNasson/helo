import React,{Component} from 'react'

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            search:'',
            posts:[],
            status: true

        }
    }
    
    render(){
        let newPosts=this.state.posts.map((post,i)=>{
            return(
                <div key={i}>
                    <p>{post.title}</p>
                    <p>{post.username}</p>
                    <p>{post.image}</p>
                </div>
            )
        })
        return(
            <div>
                <input 
                    placeholder='search'
                    input='text' />
                <button>Search</button>
                <button>Reset</button>
                <input 
                    type='checkbox'
                    placeholder='My Posts' />
                    {newPosts}
            </div>
        )
    }
}