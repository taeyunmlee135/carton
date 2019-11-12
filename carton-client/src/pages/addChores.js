import React, {Component} from 'react';
import axios from 'axios';

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

export class addChores extends Component {
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

    /*handleClick(){
        console.log("CLICKKKK");
        console.log(this.state.chore_name);
        // TODO: Change to not our api URL later (make our API key private)
        axios.post('https://us-central1-carton-5d613.cloudfunctions.net/api/chores',
            {
                chore: this.state.chore_name, // TODO: remember to throw error if not filled 
                userSubmitted: this.state.userSubmitted,
                userDo: this.state.userDo,
                postedAt: this.state.postedAt
            }) 
            .then(function(response) {
                this.sleep(300);
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
        });
    }*/

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
                  <h1> Add Chores Page </h1>
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

export default addChores 

