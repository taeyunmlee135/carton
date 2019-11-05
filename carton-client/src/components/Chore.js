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

const styles = {
    card: {
        display: 'flex'
    }
}

// This is our component that will render a chore
class Chore extends Component { 

    render(){
        // These are the variables (properties) needed for a Chore `component (rendered at bottom)
        const { classes, chore: {chore, userSubmitted, userDo} } = this.props
    
        return(
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5">{chore}</Typography>
                        <Typography variant="h5">{userSubmitted}</Typography>
                        <Typography variant="h5">{userDo}</Typography>
                    </CardContent>
                </CardActionArea> 
                <CardActions>
                    <Button size="small" 
                        onClick = {console.log("hi")}
                    >
                    Delete
                    </Button>
                    <Button size="small" >
                    Edit 
                    </Button>
                </CardActions>
            </Card>
        )
    }

}


export default withStyles(styles)(Chore)
