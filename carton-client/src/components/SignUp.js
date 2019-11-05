import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom/Link';


class SignUp extends Component {
    render(){
        return (
            <div>
                <Button component={Link} to='/' variant="contained">
                  Sign Up
                </Button>
            </div>
        )
    }


}

export default SignUp