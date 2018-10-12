import React,{Component} from 'react';

import {withRouter,Link} from 'react-router-dom';

class Nav extends Component{
    render(){
        const {pathname}=this.props.location;
    if(pathname!=='/'){
        return <div>
                 <Link to='/dashboard'><button>Home</button></Link>
                 <Link to='/new'><button>New Post</button></Link>
                 <Link to='/'><button>Logout</button></Link>
                </div>
    } else {
        return <div></div>
    }
    }
    
}

export default withRouter(Nav);