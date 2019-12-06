import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';



import "./home.css";
import profilePicture from '../images/egg.png';


export class home extends Component {

    render(){
        return (
            <div className="wrapper"> 
            <div id="announcements"> 
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
                <Button component={Link} to="/mycarton" >
                view all 
                </Button>
            </div> 

            <div class="twocol">
                <div className="previewBox" id="chorePreview"> 
                    <h2> chores! </h2>
                        <div id="hChores"> 
                            <div className="cChore" > 
                                <p> clean </p> 
                            </div> 
                            <div className="cChore" > 
                                <p> clean </p> 
                            </div> 
                            <div className="cChore" > 
                                <p> clean </p> 
                            </div> 
                        </div> 
                    <Button component={Link} to="/chores" >
                    view all 
                    </Button>
                </div> 
                <div className="previewBox" id="shoppingPreview">
                <h2> shopping! </h2>
                    <div id="hShop"> 
                        <div className="cShop" > 
                            <p> clean </p> 
                        </div> 
                        <div className="cShop" > 
                            <p> clean </p> 
                        </div> 
                        <div className="cShop" > 
                            <p> clean </p> 
                        </div> 
                    </div> 
                    <Button component={Link} to="/groceries" >
                    view all 
                    </Button>
                </div>
            </div> 
            </div> 
        )
    }


}

export default home 

