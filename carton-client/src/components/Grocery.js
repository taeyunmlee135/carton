import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

// MUI imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import CardMedia from '@material-ui/core/CardMedia'; 

// Link 
import Link from 'react-router-dom/Link';

const styles = {
    card: {
        display: 'flex'
    }
}

// This is our component that will render a grocery list item
class Grocery extends Component { 

    render(){
        // These are the variables (properties) needed for a Grocery`component (rendered at bottom)
        const { id, grocery: {item, quantity} } = this.props
    
        return(
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5">{item}</Typography>
                        <Typography variant="h5">{quantity}</Typography>
                    </CardContent>
                </CardActionArea> 
                <CardActions>
                    <button 
                        value = {id}
                        onClick = {this.props.onDeleteClick}
                    >
                    Delete
                    </button>
                </CardActions>
            </Card>
        )
    }

}
{/* <Button size="small" 
                        value = {id}
                        onClick = {this.props.onClick}//() => this.props.onClick()}
                    >
                    Delete
                    </Button> */}

export default withStyles(styles)(Grocery)
