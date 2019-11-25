import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';


// custom components
import Chore from '../components/Chore';
import AddFab from '../components/AddFab';


export class chores extends Component {

    // save the chores as a state
    state = {
        chores: null
    };
    
    /*fetchData(){
        
    }*/

    componentWillMount(){
        console.log(this.state.chores);
        console.log("HITTT");
        // TODO: Change to not our api URL later (make our API key private)
        axios.get('https://us-central1-carton-5d613.cloudfunctions.net/api/chores') 
            .then(res => {
                console.log(res.data) // check to see that the data matches the ones in our firebase
                this.setState({
                    chores: res.data // set the chores to data fetched from API
                })
            })
            .catch(err => console.log(err));
    } 

    /*componentDidUpdate(prevProps) {
        console.log("UPDATE")
        // Typical usage (don't forget to compare props):
        if (this.props.state !== prevProps.state) {
          this.fetchData();
        }
    }*/


    render(){
        let recentChoresMarkup = this.state.chores ?
        ( this.state.chores.map(c => <Chore key={c.choreId} chore={c}/>)) // make a Chore component for each item
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

