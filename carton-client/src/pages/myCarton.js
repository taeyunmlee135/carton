// import React, {Component} from 'react';
// import axios from 'axios';
// import Grid from '@material-ui/core/Grid';
// import Chore from '../components/Chore';


// // firebase 
// import db from '../firebase'

// export class mycarton extends Component {
//     constructor(props) {
//         super(props);
//         // save the carton as a state
//         this.state = {
//             cartonID: null,
//             users: null
//         };
//         this.handleDelete = this.handleDelete.bind(this);
//         this.handleEdit = this.handleEdit.bind(this);
//     }

//     componentWillMount(){
//         db.collection('Chores').orderBy("postedAt", "desc").get()
//         .then(data => {
//         let chores = [];
//         data.forEach(doc => {
//             chores.push({
//             choreId: doc.id,
//             chore: doc.data().chore,
//             userSubmitted: doc.data().userSubmitted,
//             userDo: doc.data().userDo,
//             postedAt: doc.data().postedAt
//             });
//         });
//         // set the state using the chores that we got 
//         this.setState({
//             chores: chores
//         });
//         }) 
//         .catch(err => console.error(err)); 
//     } 


//     render(){
//         let recentChoresMarkup = this.state.chores ?
//         ( this.state.chores.map(c => <Chore 
//                             key={c.choreId} id={c.choreId} chore={c} />))
//         : <p>Loading...</p> // shows "Loading..." if no data was fetched yet

        

//         return (
//             <Grid container spacing={2}>
//                 <Grid item sm={8} xs={12}>
//                     <p>Carton</p>
//                     {/* {recentChoresMarkup} */}
//                 </Grid>
//                 <Grid item sm={4} xs={12}>
//                     <p>Users</p>
//                 </Grid>
//             </Grid>
//             /*
//             <div className = "container">
//                   <h1> Chores Page </h1>
//                   <Chore chore={item1}/>
//                   <Chore chore={item2}/>

//                 <AddFab />

//             </div>*/
//         )
//     }


// }

// export default mycarton;