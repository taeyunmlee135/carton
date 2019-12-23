import React, {Component} from 'react';
import Link from 'react-router-dom/Link';
import { makeStyles } from '@material-ui/core/styles';

import { Fab } from '@material-ui/core';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

class AddFabGroceries extends Component {
    
    render(){
        return (
            <div>
                <Fab style={style} component={Link} to='/addGroceries'> New Item
                    
                     </Fab>
            </div>
        )
    }


}

export default AddFabGroceries  
