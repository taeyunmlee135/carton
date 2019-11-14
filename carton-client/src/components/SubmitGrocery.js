import React, {Component} from 'react';
import Link from 'react-router-dom/Link';


import { Fab } from '@material-ui/core';

class SubmitGrocery extends Component {
    
    render(){
        return (
            <div>
                <Fab onClick = {() => this.props.onClick()}
                    component={Link} to='/groceries'
                    > 
                    Add To List
                    </Fab>
            </div>
        )
    }


}

export default SubmitGrocery