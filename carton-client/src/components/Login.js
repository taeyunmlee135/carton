import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom/Link';


class Login extends Component {
    render(){
        return (
            <div>
                <Button component={Link} to='/' variant="contained">
                  Login
                </Button>
            </div>
        )
    }


}

export default Login