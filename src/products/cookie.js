import React from 'react';
import Display from './display';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class Cookie extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/products/cookie'><Normal /></Route>
                    <Route exact path='/products/cookie/premium'><Premium /></Route>
                </Switch>
            </div>
        )
    }
}

class Normal extends React.Component {
    constructor() {
        super();
        this.state = {
            cookies: [
                {
                    imageUrl: require('../images/picture/R2.png'), 
                    name: 'Coconut Cookie',
                    detail: ['Hand Crafted', 'Eggless', "Suger Free"],
                },
                
            ]
        }
    }
    render() {
        return (
            <div className='normal-cookie'>
                <Link to='/products/cookie/premium'>
                    <button className='premium-button'>
                        <span>Premium Cookies</span>
                    </button>
                </Link>
                <div style={{marginTop: '50px', display: 'flex'}}>
                    {this.state.cookies.map(cookie=>{
                        return(
                            <Display desc = {{...cookie}}/>
                        )
                    })}
                    {/* <Display desc = {{imageUrl: require('../images/picture/R2.png'), name: 'Coconut Cookie', detail: ['Hand Crafted', 'Eggless', "Suger Free"]}}/>
                    <Display desc = {{imageUrl: require('../images/picture/R2.png'), name: 'Coconut Cookie', detail: ['Hand Crafted', 'Eggless', "Suger Free"]}}/> */}
                </div>
            </div>
        )
    }
}
class Premium extends React.Component {
    render() {
        return (
            <div>
                Premium
            </div>
        )
    }
}
export default Cookie;

