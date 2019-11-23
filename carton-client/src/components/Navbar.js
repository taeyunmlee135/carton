import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

// Material UI 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


class Navbar extends Component {

    





    render(){

        // auth aware navbar
        // TODO: have to refresh after logging in to see a different navbar
        const loginOrProfile = (props) => {
            return this.props.authenticated === true ? 
                <AppBar position='fixed'>
                    <Toolbar> 

                        <Button component={Link} to='/'> Home </Button>
                        <Button component={Link} to='/chores'> Chores </Button> 
                        <Button component={Link} to='/myCarton'> my carton </Button>
                        

                    </Toolbar>
                </AppBar>

                : 

                <AppBar position='fixed'>
                    <Toolbar> 

                        <Button component={Link} to='/'> Home </Button>
                        <Button component={Link} to='/login'> Login </Button>
                        <Button component={Link} to='/signup'> Sign Up </Button>

                    </Toolbar>
                </AppBar>
            
        }


        return (
            <AppBar position='fixed'>
                <Toolbar> 
                    {loginOrProfile(this.props.authenticated)}
                </Toolbar>
            </AppBar>
        )
    }


}
export default Navbar  

