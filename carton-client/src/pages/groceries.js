import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';


// custom components
import Grocery from '../components/Grocery';
import AddFabGroceries from '../components/AddFabGroceries';

// firebase 
import db from '../firebase'

export class groceries extends Component {

    constructor(props) {
        super(props);
        // save the groceries as a state
        this.state = {
            chores: null
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount(){
        db.collection('groceries').orderBy("postedAt", "desc").get()
        .then(data => {
        let groceries = [];
        data.forEach(doc => {
            groceries.push({
            groceryId: doc.id,
            item: doc.data().item,
            quantity: doc.data().quantity,
            postedAt: doc.data().postedAt
            });
        });
        // set the state using the groceries that we got 
        this.setState({
            groceries: groceries
        });
        }) 
        .catch(err => console.error(err)); 
    } 
    

    handleDelete(event){ 
        const id = event.target.value; // get the id of the grocery item based on the target 
        db.collection("groceries").doc(id).delete() // delete the item based on id
        .then(() => {
                console.log(`Document ${id} deleted successfully`); 

                // re-render state by filtering our the grocery item that has the id we are deleting
                this.setState({ 
                    groceries: this.state.groceries.filter(function(value){
                        return value["groceryId"] !== id;
                     })
                })
            }
        )
        .catch(function(error) {
            console.error("Error removing document: ", error); // throw error if there was error
        });
    }

    render(){

        let recentGroceriesMarkup = this.state.groceries ?
        ( this.state.groceries.map(g => <Grocery 
                            key={g.groceryId} id= {g.groceryId} grocery={g} ///>))
                            onDeleteClick={this.handleDelete}/>)) // make a Grocery component for each item
        : <p>Loading...</p> // shows "Loading..." if no data was fetched yet

        return (
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    <p>Grocery List</p>
                    {recentGroceriesMarkup}
                </Grid>
                <AddFabGroceries />
            </Grid>
        )
    }


}

export default groceries

