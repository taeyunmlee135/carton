import React, {Component} from 'react';
import Link from 'react-router-dom/Link';


import { Fab } from '@material-ui/core';

class SubmitChore extends Component {
    
    render(){
        return (
            <div>
                <Fab onClick = {() => this.props.onClick()}
                    component={Link} to='/chores'
                    > 
                    Submit Chore
                    </Fab>
            </div>
        )
    }


}

export default SubmitChore