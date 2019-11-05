import React, {Component} from 'react';
import Link from 'react-router-dom/Link';


import { Fab } from '@material-ui/core';

class AddFab extends Component {

    render(){
        return (
            <div>
                <Fab component={Link} to='/addChores'> New Chore
                    
                     </Fab>
            </div>
        )
    }


}

export default AddFab  

