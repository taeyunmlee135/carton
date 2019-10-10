import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

// Material UI 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


class Navbar extends Component {

    render(){
        return (
            <AppBar position='fixed'>
                <Toolbar> 

                    <Button component={Link} to='/'> Home </Button>
                    <Button component={Link} to='/chores'> Chores </Button> 
                    <Button component={Link} to='/login'> Login </Button>
 
                </Toolbar>
            </AppBar>
        )
    }


}
export default Navbar  

