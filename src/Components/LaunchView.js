import React, { Component } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import FlightView from './FlightView';


export class LaunchView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             flights : {
                 links : {
                    flickr_images : {}
                 }
             }
        }
    }

    componentDidMount = () => {
        const flight_par = this.props.match.params.flight_number
        this.getSingleLaunch(flight_par);
    }
    
    getSingleLaunch = (flight_par) => {
            axios.get('https://api.spacexdata.com/v3/launches/'+flight_par)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    flights : res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }



    render() {
        const fli_img = this.state.flights.links.flickr_images.length === 0 ? 'https://media.istockphoto.com/vectors/rocket-launch-vector-illustration-isolated-on-white-vector-id876037616?k=6&m=876037616&s=612x612&w=0&h=souIgzQ2Yj43H1cffpAI4nwa3KUvseD7am6ovPsao8c=' : this.state.flights.links.flickr_images[0]; 
    //    const fli_img1 = this.state.flights.links.flickr_images[1]
    //    const fli_img2 = this.state.flights.links.flickr_images[2]
    //    const fli_img3 = this.state.flights.links.flickr_images[3]
        return (
            <div>
                {/* <h2>Launch View</h2> */}
                {/* <h2>{this.state.flights.mission_name}</h2> */}
                <FlightView 
                f_name = {this.state.flights.mission_name}
                l_date = {this.state.flights.launch_date_local}
                l_year = {this.state.flights.launch_year}
                details = {this.state.flights.details}
                img5 = {fli_img}
            
                />
                 
            </div>
        )
    }
}

export default withRouter(LaunchView);