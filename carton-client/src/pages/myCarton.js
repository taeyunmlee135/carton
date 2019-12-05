import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';


import Chore from '../components/Chore';


// firebase 
import db from '../firebase'

export class mycarton extends Component {
    constructor(props) {
        super(props);
        // let userEmail = localStorage.userEmail ? localStorage.userEmail : "not signed in";
        // let cartonsRef = db.collection("cartons");
        // let carton = cartonsRef.where("users", "array-contains", accountEmail); 

        console.log(`got the props ${props.userCarton}, ${props.userEmail}`);




        // db.collection("cartons").where("cartonUsers", "array-contains", accountEmail)
        //     .get()
        //     .then(function(querySnapshot) {
        //         querySnapshot.forEach(function(doc) {
        //             // doc.data() is never undefined for query doc snapshots
        //             console.log("CARTON ID IS", doc.id, " => ", doc.data());
        //         });
        //     })
        //     .catch(function(error) {
        //         console.log("Error getting documents: ", error);
        //     });

        // db.collection("cartons").collection("users")
        //     .get()
        //     .then(data => {
        //         // console.log(`${}`);
        //         data.forEach(doc => {
        //             // doc.data() is never undefined for query doc snapshots
        //             console.log("hello 1");
        //             console.log(doc.id);
        //         });
        //     })
        //     .catch(function(error) {
        //         console.log("Error getting documents: ", error);
        //     });

        // console.log(`cartonid for user ${accountEmail} is ${carton}`);
        // save the carton as a state
        this.state = {
            userEmail: this.props.userEmail,
            cartonID: props.userCarton
        };
        console.log(this.state.cartonID);
    }

    componentWillMount(){
        db.collection("cartons").get()
        .then(data => {
            let cartons = [];
            data.forEach(doc => {
                cartons.push({
                cartonID: doc.id,
                // users: doc.data().users
                });
        });
        // set the state using the chores that we got 
        this.setState({
            // cartons: cartons
            cartonID: cartons.cartonID,
            // users: users
        });
        console.log(this.state.cartonID);
        }) 
        .catch(err => console.error(err)); 
    } 


    render(){
        let recentChoresMarkup = this.state.cartons ?
        <p> {this.state.cartonID} </p> 
        // ( this.state.cartons.map(c => <Chore 
        //                     key={c.cartonID} id={c.cartonID} chore={c} />))
        // : <p>Loading...</p> // shows "Loading..." if no data was fetched yet
        : <CircularProgress size={30} /> // shows spinner while loading        

        return (
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    <p>Carton</p>
                    {recentChoresMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Users</p>
                </Grid>
            </Grid>
            
        )
    }


}

export default mycarton;