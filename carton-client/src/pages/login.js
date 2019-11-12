import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/carton-blue.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';

// material UI stuff for field 
// import FilledInput from '@material-ui/core/FilledInput';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import Login from '../components/Login';

// Material UI Stuff 
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent'; 
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = { // according to classNames
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '10px auto 8px auto',
        borderRadius: '20px'
    },
    pageTitle: {
        margin: '20px auto 20px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20,
        marginBottom: 5,
        position: 'relative'
    },
    customError: {
        color:'red',
        fontSize: '0.8rem',
        marginTop: 10
    },
    progress: {
        position: 'absolute'

    }
};


class login extends Component {
    // controlled component method for handling forms in React 
    constructor() {
        super();
        this.state={ // bind email and password to state
            email:'',
            password:'',
            loading: false,
            errors: {} // array
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        console.log('submit pressed');
        event.preventDefault(); // prevent page from reloading
        this.setState({
            loading: true
        });
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        axios
            .post('/login', userData)
            .then((res) => { // to get here, must be successful, so redirect 
                console.log(res.data); 
                this.setState({
                    loading: false
                });
                this.props.history.push('/'); // to home page
            })
            .catch((err) => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    }

    handleChange = (event) => { // target is input to textField, properties name and value
        this.setState({
            [event.target.name]: event.target.value // sets 'name' state to value
        });
    };

    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm/> 
                <Grid item sm> 
                    <img src={AppIcon} alt="carton logo" width='250' className={classes.image} /> 
                    <Typography variant="h3" className={classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField 
                            id="email"
                            name="email" 
                            type="email" 
                            label="Email" 
                            className={classes.textField}
                            helperText={errors.email} // give helper text if email based error
                            error={errors.email ? true : false}
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            fullWidth
                        /> 
                        <TextField 
                            id="password" 
                            name="password" 
                            type="password" 
                            label="Password" 
                            className={classes.textField}
                            helperText={errors.password} // give helper text if password based error
                            error={errors.password ? true : false}
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            fullWidth
                        /> 
                        {errors.general && (
                            <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}

                        <Button 
                            type="submit" 
                            variant="contained" 
                            className={classes.button} 
                            disabled={loading} // button is disabled while loading
                        >
                        Login
                        {loading && ( // if loading is true, return CircularProgress comp
                            <CircularProgress size={30} className={classes.progress} /> 
                        )}
                        </Button>
                        <br /> 
                        <small>don't have an account? sign up <Link to="/signup"> here </Link> </small> 
                    </form>
                </Grid> 
                <Grid item sm/> 

            </Grid>
            
        );
    }


}

login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(login);