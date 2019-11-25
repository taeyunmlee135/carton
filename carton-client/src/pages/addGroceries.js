import React, {Component} from 'react';

// material UI stuff for field 
// import FilledInput from '@material-ui/core/FilledInput';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import SubmitGrocery from '../components/SubmitGrocery';
import TextField from '@material-ui/core/TextField';

// firebase 
import db from '../firebase'

export class addGroceries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "", // set initial states to empty strings
            quantity: "", 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        const id = event.target.getAttribute("id"); // Depending on the id of the textfield, set state accordingly!
        switch(id){
            case "item": 
                this.setState({item: event.target.value});
                break;
            case "quantity":
                this.setState({quantity: event.target.value});
                break;
            default:
                break;
        }
    }


    handleClick(){
        const newGrocery = {
            item: this.state.item,
            quantity: this.state.quantity,
            postedAt: new Date().toISOString()
        };
        
        db.collection("groceries").add(newGrocery)
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
                  <h1> Add a Grocery List Item</h1>
                <div className = "vertical">
                <TextField
                    id = "item" /* make sure that we assign text field an id */
                    label="Grocery Item"
                    margin="normal"
                    variant="filled"
                    value={this.state.item} /* Value is what's at that state */
                    onChange={this.handleChange} /* Call handle change every time it changes */
                />
                <TextField
                    id = "quantity"
                    label="Quantity"
                    margin="normal"
                    variant="filled"
                    value={this.state.quantity} 
                    onChange={this.handleChange}
                />
                </div>
                <SubmitGrocery onClick={this.handleClick} />
            </div>
        )
    }


}

export default addGroceries

