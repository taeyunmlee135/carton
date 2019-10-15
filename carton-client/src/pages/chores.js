import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';


// custom components
import Chore from '../components/Chore';
import AddFab from '../components/AddFab';

// fake chores
import {item1, item2} from './fake.js';

export class chores extends Component {

    state = {
        chores: null
    };
    
    componentDidMount(){
        axios.get('https://us-central1-carton-5d613.cloudfunctions.net/api/chores') // TODO: Change to not our api URL later 
            .then(res => {
                console.log(res.data)
                this.setState({
                    chores: res.data
                })
            })
            .catch(err => console.log(err));
    }


    render(){
        /*let recentChoresMarkup = this.state.chores ? (
            this.state.chores.map(chore => <p>{chore.chore}</p>)
        ) : <p>Loading...</p>*/
        let recentChoresMarkup = this.state.chores ?
        ( this.state.chores.map(c => <Chore key={c.choreId} chore={c}/>))
        : <p>Loading...</p>

        return (
            <Grid container spacing={16}>
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

