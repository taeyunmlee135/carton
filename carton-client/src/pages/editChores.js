import React, {Component} from 'react';

// material UI stuff for field 
// import FilledInput from '@material-ui/core/FilledInput';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import SubmitChore from '../components/SubmitChore';
import TextField from '@material-ui/core/TextField';

// firebase 
import db from '../firebase'

export class editChore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chore_name: "", // set initial states to empty strings
            userSubmitted: "", 
            userDo: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        const id = event.target.getAttribute("id"); // Depending on the id of the textfield, set state accordingly!
        switch(id){
            case "chore": 
                this.setState({chore_name: event.target.value});
                break;
            case "userSubmitted":
                this.setState({userSubmitted: event.target.value});
                break;
            case "userDo":
                this.setState({userDo: event.target.value});
                break;
            default:
                break;
        }
    }

    handleClick(){
        const newChore = {
            chore: this.state.chore_name,
            userSubmitted: this.state.userSubmitted,
            userDo: this.state.userDo,
            postedAt: new Date().toISOString()
        };
        
        db.collection("Chores").add(newChore)
        .then(doc => {
            console.log(`Document ${doc.id} created successfully`);
        })
        .catch(err => {
            console.error(err);
        });
    }
    

    render(){

        return (
            <div className = "container">
                  <h1> Edit Chores Page </h1>
                <div className = "vertical">
                <TextField
                    id = "chore" /* make sure that we assign text field an id */
                    label="Chore"
                    margin="normal"
                    variant="filled"
                    value={this.state.chore_name} /* Value is what's at that state */
                    onChange={this.handleChange} /* Call handle change every time it changes */
                />
                <TextField
                    id = "userSubmitted"
                    label="Submitting User"
                    margin="normal"
                    variant="filled"
                    value={this.state.userSubmitted} 
                    onChange={this.handleChange}
                />
                <TextField
                    id = "userDo"
                    label="Do User"
                    margin="normal"
                    variant="filled"
                    value={this.state.userDo} 
                    onChange={this.handleChange}
                />
                </div>
                <SubmitChore onClick={this.handleClick} />
            </div>
        )
    }


}

export default editChore 

