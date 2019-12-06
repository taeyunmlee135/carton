import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import "./home.css";
import profilePicture from '../images/egg.png';


export class home extends Component {

    render(){
        return (
            
            <div> 
            <h2> announcements! </h2>
                <div id="hAnnounce"> 
                    <div className="uAnnouncement" > 
                        <h3> <img src={profilePicture} width={'10%'}/>    monica </h3> 
                        <p> package arriving at 4pm today! </p> 
                    </div> 
                    <div className="uAnnouncement" > 
                        <h3> <img src={profilePicture} width={'10%'}/> taeyun </h3>
                        <p> plumber coming at 2pm 12/7 </p>
                    </div> 
                    <div className="uAnnouncement" > 
                        <h3> <img src={profilePicture} width={'10%'}/> rebecca </h3>
                        <p> extra chocolate chip cookies on the kitchen counter! </p> 
                    </div> 
                </div> 
            </div> 
        )
    }


}

export default home 

