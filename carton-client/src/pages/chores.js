import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';


// custom components
import Chore from '../components/Chore';
import AddFab from '../components/AddFab';

// firebase 
import db from '../firebase'
import { DEFAULT_ECDH_CURVE } from 'tls';

export class chores extends Component {

    constructor(props) {
        super(props);
        // save the chorse as a state
        this.state = {
            chores: null
        };
        //this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        db.collection('Chores').orderBy("postedAt", "desc").get()
        .then(data => {
        let chores = [];
        data.forEach(doc => {
            chores.push({
            choreId: doc.id,
            chore: doc.data().chore,
            userSubmitted: doc.data().userSubmitted,
            userDo: doc.data().userDo,
            postedAt: doc.data().postedAt
            });
        });
        console.log(chores)
        // set the state using the chores that we got 
        this.setState({
            chores: chores
        });
        console.log(this.state.chores)
        }) 
        .catch(err => console.error(err)); 
    } 
    

    handleClick(event){
        console.log("hit")
        const id = event.target.value;
        db.collection("Chores").doc(id).delete()
        .then(() => {
                console.log(`Document ${id} deleted successfully`); 
                this.setState({
                    chores: this.state.chores.filter(function(value){
                        return value["choreId"] != id;
                     })
                })
            }
        )
        .catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

    /*async getChores() {
        const snapshot = await db.collection('Chores').get()
        .then(data => {
        let chores = [];
        data.forEach(doc => {
            chores.push({
            choreId: doc.id,
            chore: doc.data().chore,
            userSubmitted: doc.data().userSubmitted,
            userDo: doc.data().userDo,
            postedAt: doc.data().postedAt
            });
        });   
        const documents = [];
        snapshot.forEach(ddoc => {
            chores.push({
            choreId: doc.id,
            chore: doc.data().chore,
            userSubmitted: doc.data().userSubmitted,
            userDo: doc.data().userDo,
            postedAt: doc.data().postedAt
            });
        });
        return documents;
        }*/

    render(){

        let recentChoresMarkup = this.state.chores ?
        ( this.state.chores.map(c => <Chore 
                            key={c.choreId} id= {c.choreId} chore={c} ///>))
                            onClick={this.handleClick}/>)) // make a Chore component for each item
        : <p>Loading...</p> // shows "Loading..." if no data was fetched yet

        return (
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    <p>Chores</p>
                    {recentChoresMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Users</p>
                </Grid>
                <AddFab />
            </Grid>
            /*
            <div className = "container">
                  <h1> Chores Page </h1>
                  <Chore chore={item1}/>
                  <Chore chore={item2}/>

                <AddFab />

            </div>*/
        )
    }


}

export default chores 

