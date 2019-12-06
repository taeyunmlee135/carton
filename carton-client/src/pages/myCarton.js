import React, {Component} from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Box from '@material-ui/core/Box';

import profilePicture from '../images/egg.png';

import Chore from '../components/Chore';
import './myCarton.css';

// firebase 
import db from '../firebase'


// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       margin: '20px',
//       backgroundColor: '#b8d9fd',
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//     icon: {
//       color: 'rgba(255, 255, 255, 0.54)',
//     },
//     titleBar: {
//       color: '#b8d9fd',
//       backgroundColor: '#b8d9fd'
//     }
//   }));

export class mycarton extends Component {

    constructor(props) {
        super(props);
        // let userEmail = localStorage.userEmail ? localStorage.userEmail : "not signed in";
        // let cartonsRef = db.collection("cartons");
        // let carton = cartonsRef.where("users", "array-contains", accountEmail); 
        console.log(`got props ${props.userCarton}, ${props.userEmail}`);

        // save the carton as a state
        this.state = {
            userEmail: props.userEmail,
            cartonID: props.userCarton,
            users: null
        };
        console.log("state carton ID", this.state.cartonID);
        console.log("state user Email", this.state.userEmail);

        if (this.state.cartonID) {
            db.collection("cartons").doc(this.state.cartonID).collection("users")
            .get()
            .then(data => {
                let users = [];
                data.forEach(doc => {
                    users.push({
                        uname: doc.data().username,
                        uemail: doc.id
                    });
                });
                this.setState({
                    users: users
                });
            })
            .catch(err => console.error(err)); 
        }
            
    }

    // componentWillMount(){
    //     db.collection("cartons").get()
    //     .then(data => {
    //         let cartons = [];
    //         data.forEach(doc => {
    //             cartons.push({
    //             cartonID: doc.id,
    //             // users: doc.data().users
    //             });
    //     });
    //     // set the state using the chores that we got 
    //     this.setState({
    //         // cartons: cartons
    //         cartonID: cartons.cartonID,
    //         // users: users
    //     });
    //     console.log(this.state.cartonID);
    //     }) 
    //     .catch(err => console.error(err)); 
    // } 


    render(){
        // let recentChoresMarkup = this.state.cartonID ?
        // <h1> {this.state.cartonID} </h1> 
        
        // : <CircularProgress size={30} /> // shows spinner while loading        

        // const classes = useStyles();
        // className={classes.gridList}

        // ( this.state.users.map(udata => (
        //     <GridListTile key={udata.uname}>
        //         <img src={profilePicture} alt={"profile"} />
        //         <GridListTileBar
        //             title={udata.uname}
        //             subtitle={<span>email: {udata.uemail}</span>}
        //         />
        //     </GridListTile>
        // )))

        let cartonUserDisplay = this.state.users ? 
        ( this.state.users.map(udata => (
            <div key={udata.uname} bgcolor="#b8d9fd" className="utile" >
                <h2> {udata.uname}</h2>
                <img src={profilePicture} alt={"profile"} width={'50%'}/>
                <p> email: {udata.uemail}</p>
            </div>
        )))
        :
        <CircularProgress size={30} /> 


        return (
            this.state.cartonID ?
            <div>
                 
                <h1> {this.state.cartonID} </h1>
                    <div className='bigContainer'>
                        <div id='uTileContainer'>
                            {/* <h2> haha </h2> */}
                            {cartonUserDisplay}

                        </div>

                        <div id='cartonInfoContainer'>
                            <strong> Address: </strong> 
                            <p> 340 E Foothill Blvd </p>
                            <br/>
                            <strong> Number of Residents: </strong> 
                            <p> four </p> 

                        </div>
                    </div>
                    
            </div>
            : 
            <CircularProgress size={30} /> 

            
            
        )
    }


}

export default mycarton;