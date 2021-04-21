import React, { Component } from 'react'
import './Styles.css';

export default class LaunchList extends Component {
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-sm-2"></div>
                        <div className = "col-sm-8">
                            <div className = "row" id = "card">
            <div className = "col-sm-8">
                <h2 className = "rock-name">{this.props.title}</h2>
                <p className = "desc">{this.props.desc}</p>
             
            </div>
            <div className = "col-sm-4">
                <img className = "rock-img" src= {this.props.img} alt = "rocketimage"></img>
            </div>
                            </div>
                        </div>
                        <div className = "col-sm-2"></div>
                    </div>
                </div>
            </div>
        )
    }
}
