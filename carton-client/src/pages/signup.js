import React, {Component} from 'react';

// material UI stuff for field 
// import FilledInput from '@material-ui/core/FilledInput';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import SignUp from '../components/SignUp';

import TextField from '@material-ui/core/TextField';

export class signup extends Component {

    render(){
        return (
            <div className = "container">
                  <h1> Signup Page </h1>
                <div className = "vertical">
                <form id="signup-form">
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
                    <TextField 
                        label="Reenter Password"
                        margin="normal" 
                        variant="filled"
                    /> 
                    <TextField 
                        label="CartonID"
                        margin="normal"
                        variant="filled"
                    />

                    <SignUp /> {/*button for signup, currently links back to the home page*/}
                </form>
                
                {/* TODO: add a "remember me" feature */}
                </div>
                x
            </div>
        )
    }


}

export default signup