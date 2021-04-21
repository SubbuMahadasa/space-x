import React, { Component } from 'react'
import Launches from './Launches';
import './Styles.css';
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className ="row" id="h-row">
                        <div className = "col-sm-4"></div>
                        <div className = "col-sm-4">
                            <div className = "header-part">
                            <h2 className = "tirle">Space-X Rockets</h2>
                            </div>
                           
                        </div>
                        <div className = "col-sm-4"></div>
                    </div>
                    <div className = "row">
                        {/* <Launches/> */}
                    </div>
                </div>
            </div>
        )
    }
}
