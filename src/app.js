import React from "react";
import Sidebar from "./sidebar";
import Landing from './Landing';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Sidebar />
                    <div className="scroll-cont">
                        <div className="scroll-child">
                            <Landing />
                        </div>
                        <div className="scroll-child">
                            <Main />
                            <Footer />
                        </div>
                    </div>
                    
                </Router>
            </div>
        )
    }
}
export default App;