import React, { Component } from 'react'

import axios from 'axios';
import {Link} from 'react-router-dom';
import LaunchList from './LaunchList';
export default class Launches extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             launches : []
        }
    }

    componentDidMount = () => {
        this.GetApi();
    }
    

     GetApi =()=>{
        axios.get('https://api.spacexdata.com/v3/launches')
        .then((res) => {
            console.log(res.data);
            this.setState({
                launches : res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

     MapDetails = () => {
        const LaunchMap = this.state.launches.map((launch , index) => {
            const allimg = launch.links.flickr_images.length === 0 ? 'https://media.istockphoto.com/vectors/rocket-launch-vector-illustration-isolated-on-white-vector-id876037616?k=6&m=876037616&s=612x612&w=0&h=souIgzQ2Yj43H1cffpAI4nwa3KUvseD7am6ovPsao8c=' : launch.links.flickr_images[0];
            return ( <Link key = {index}  to = {'/launch/'+launch.flight_number}> <LaunchList 
            
            title = {launch.mission_name} 
            desc = {launch.details}
             img = {allimg}/> </Link>)
        })
        return LaunchMap;
    }

    render() {
        return (
            <div>
                {this.MapDetails()}
            </div>
        )
    }
}
