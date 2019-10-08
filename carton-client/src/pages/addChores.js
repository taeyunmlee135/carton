import React, {Component} from 'react';

// material UI stuff for field 
// import FilledInput from '@material-ui/core/FilledInput';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import SubmitChore from '../components/SubmitChore';
import TextField from '@material-ui/core/TextField';

export class addChores extends Component {

    render(){
        return (
            <div className = "container">
                  <h1> Add Chores Page </h1>
                <div className = "vertical">
                <TextField
                    label="Chore"
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    label="Time"
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    label="Do User"
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    label="Submitting User"
                    margin="normal"
                    variant="filled"
                />
                </div>
                <SubmitChore />
            </div>
        )
    }


}

export default addChores 

