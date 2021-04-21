import React, { Component } from 'react'
import './Styles.css'
export default class FlightView extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className = "row">
                        <div className = "col-sm-3">
                            
                            
                        </div>
                        <div className = "col-sm-6">
                        <h1>{this.props.f_name}</h1>
                            <p className = "flight-text">Launch Date : {this.props.l_date}</p>
                            <p  className = "flight-text">Launch Year : {this.props.l_year}</p>
                         
                            <p className = "flight-text">Launch Details :{this.props.details}</p>
                        </div>
                        <div className = "col-sm-3">
                            <img className = "img-f" src={this.props.img5} ></img>
                            {/* <p>{this.props.img}</p> */}
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-sm-2"></div>
                        <div className = "col-sm-8">
                        
                        </div>
                        <div className = "col-sm-2"></div>
                    </div>
                </div>
            </div>
        )
    }
}
