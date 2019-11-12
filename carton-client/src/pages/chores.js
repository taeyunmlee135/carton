import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';


// custom components
import Chore from '../components/Chore';
import AddFab from '../components/AddFab';

// firebase 
import db from '../firebase'

export class chores extends Component {

    constructor(props) {
        super(props);
        // save the chorse as a state
        this.state = {
            chores: null
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentWillMount(){
        db.collection('Chores').orderBy("postedAt", "desc").get()
        .then(data => {
        let chores = [];
        data.forEach(doc => {
            chores.push({
            choreId: doc.id,
            chore: doc.data().chore,
            userSubmitted: doc.data().userSubmitted,
            userDo: doc.data().userDo,
            postedAt: doc.data().postedAt
            });
        });
        // set the state using the chores that we got 
        this.setState({
            chores: chores
        });
        }) 
        .catch(err => console.error(err)); 
    } 
    

    handleDelete(event){ 
        const id = event.target.value; // get the id of the chore based on the target 
        db.collection("Chores").doc(id).delete() // delete the chore based on id
        .then(() => {
                console.log(`Document ${id} deleted successfully`); 

                // re-render state by filtering our the chore that has the id we are deleting
                this.setState({ 
                    chores: this.state.chores.filter(function(value){
                        return value["choreId"] !== id;
                     })
                })
            }
        )
        .catch(function(error) {
            console.error("Error removing document: ", error); // throw error if there was error
        });
    }

    handleEdit(event){
        const id = event.target.value;
        console.log(id)
        const newChore = {
            choreId: id,
            chore: "test",
            userSubmitted: "test",
            userDo: "test",
            postedAt: new Date().toISOString()
        };

        db.collection("Chores").doc(id).set(newChore)
        .then(() => {
                console.log(`Document ${id} editted successfully`); 

                let newChoreList = []
                this.state.chores.forEach(item => {
                    if (item["choreId"] !== id) newChoreList.push(item); 
                    else newChoreList.push(newChore);
                 })

                this.setState({
                    chores: newChoreList
                })
            }
        )
        .catch(function(error) {
            console.error("Error editing document: ", error);
        });
    }

    render(){

        let recentChoresMarkup = this.state.chores ?
        ( this.state.chores.map(c => <Chore 
                            key={c.choreId} id= {c.choreId} chore={c} ///>))
                            onDeleteClick={this.handleDelete}
                            onEditClick={this.handleEdit}/>)) // make a Chore component for each item
        : <p>Loading...</p> // shows "Loading..." if no data was fetched yet

        return (
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    <p>Chores</p>
                    {recentChoresMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Users</p>
                </Grid>
                <AddFab />
            </Grid>
        )
    }


}

export default chores 

