import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

// MUI imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import CardMedia from '@material-ui/core/CardMedia'; 

// Link 
import Link from 'react-router-dom/Link';

 


const styles = {
    card: {
        display: 'flex'
    }
}


// This is our component that will render a chore
class Chore extends Component { 

    render(){
        // These are the variables (properties) needed for a Chore `component (rendered at bottom)
        const { id, chore: {chore, userSubmitted, userDo} } = this.props
    
        return(
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5"> chore: {chore}</Typography>
                        <Typography variant="h5"> {userSubmitted} submitted this chore</Typography>
                        <Typography variant="h5"> {userDo} should do this chore</Typography>
                        <FormControlLabel
                            control={
                            <Checkbox checked={false} onChange={this.props.onDeleteClick} value = {id} />
                            }
                            label="Done"
                        />
                    </CardContent>
                </CardActionArea> 
                <CardActions>
                    <button 
                        value = {id}
                        onClick = {this.props.onDeleteClick}
                    >
                    Delete
                    </button>
                    
                    {/* <button component={Link} to='/editChores'
                        value = {id}
                        onClick = {this.props.onEditClick}
                    >
                    Edit
                    </button> */}
                </CardActions>
            </Card>
        )
    }

}


export default withStyles(styles)(Chore)
