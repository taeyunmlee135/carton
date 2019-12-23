import React, {Component} from 'react';
import Link from 'react-router-dom/Link';


import { Fab } from '@material-ui/core';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

class AddFab extends Component {

    render(){
        return (
            <div>
                <Fab style={style} component={Link} to='/addChores'> New Chore
                    
                     </Fab>
            </div>
        )
    }


}

export default AddFab  

