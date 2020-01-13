import React from "react";
import Sidebar from "./sidebar";
import Landing from './Landing';
import Main from './Main';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Sidebar />
                    <Landing />
                    <Main />
                </Router>
            </div>
        )
    }
}
export default App;