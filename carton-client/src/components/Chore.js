import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

// MUI things
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
//import CardMedia from '@material-ui/core/CardMedia'; 

const styles = {
    card: {
        display: 'flex'
    }
}

class Chore extends Component { 

    render(){
        const{ classes, chore: {chore_name, postedAt, userDo, userSubmitted} } = this.props
        return(
            <Card>
                <CardContent>
                    <Typography variant="h5">{chore_name}</Typography>
                    <Typography variant="h5">{postedAt}</Typography>
                    <Typography variant="h5">{userDo}</Typography>
                    <Typography variant="h5">{userSubmitted}</Typography>
                </CardContent>
            </Card>
        )
    }

}


export default withStyles(styles)(Chore)
