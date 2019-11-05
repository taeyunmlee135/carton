import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//////////////////////////////////////////////////////////////////////////
// FROM THE TUTORIAL 

const config = {
    apiKey: "AIzaSyCntBiECLjGFAA5Z8ynh_mJUbBfXVNLkGw",
    authDomain: "carton-5d613.firebaseapp.com",
    databaseURL: "https://carton-5d613.firebaseio.com",
    projectId: "carton-5d613",
    storageBucket: "carton-5d613.appspot.com",
    messagingSenderId: "499457247630",
    appId: "1:499457247630:web:aee2dbbb8659e15be43cdf",
    measurementId: "G-ZHL2VK3TYY"
}

const firebase = require('firebase');
firebase.initializeApp()


const functions = require('firebase-functions');


// Signup route 
app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        reenterPassword: req.body.reenterPassword,
        cartonID: req.body.cartonID
    }

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(data => {
            return res.status(201).json( { message: 'user ${data.user.uid} signed up sucessfully'})
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({error: err.code});
        })
})