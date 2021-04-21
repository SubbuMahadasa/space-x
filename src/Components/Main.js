import React, { Component } from 'react'
import {HashRouter as Router , Switch ,Route , Link} from 'react-router-dom';
import Header from './Header'
import Launches from './Launches';
import LaunchView from './LaunchView';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                <Header/>
               
                
                <Switch>
                <Route path = '/launch/:flight_number'><LaunchView/></Route>
                    <Route path = '/'><Launches/></Route>
                  
                </Switch>
                </Router>
               
            </div>
        )
    }
}
