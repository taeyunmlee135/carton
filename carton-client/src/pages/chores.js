import React, {Component} from 'react';
//import axios from 'axios';
//import Grid from '@material-ui/core/Grid';


// custom components
import Chore from '../components/Chore';
import AddFab from '../components/AddFab';

// fake chores
import {item1, item2} from './fake.js';

export class chores extends Component {

    // state = {
    //     chores = null
    // };

    // componentDidMount(){
        
    // }

    render(){
        return (
            <div className = "container">
                  <h1> Chores Page </h1>
                  <Chore chore={item1}/>
                  <Chore chore={item2}/>

                <AddFab />

            </div>
        )
    }


}

export default chores 

