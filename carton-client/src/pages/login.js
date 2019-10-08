import React, {Component} from 'react';

// material UI stuff for field 
// import FilledInput from '@material-ui/core/FilledInput';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import Login from '../components/Login';
import TextField from '@material-ui/core/TextField';

export class login extends Component {

    render(){
        return (
            <div className = "container">
                  <h1> Login Page </h1>
                <div className = "vertical">
                <TextField
                    label="Username"
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    label="Password"
                    margin="normal"
                    variant="filled"
                />
                </div>
                <Login />
            </div>
        )
    }


}

export default login