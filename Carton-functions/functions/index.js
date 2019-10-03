const functions = require('firebase-functions');
const admin = require('firebase-admin');


admin.initializeApp();

exports.getChores = functions.https.onRequest((request, response) => {
    admin.firestore().collection('Chores').get()
        .then(data => {
            let chores = [];
            data.forEach(doc => {
                chores.push(doc.data());
            });
            return response.json(chores);
        })
        .catch(err => console.error(err));
});

exports.createChore = functions.https.onRequest((request, response) => {
    const newChore = {
        chore : req.body.chore,
        userSubmitted : req.body.userSubmitted, 
        userDo : req.body.userDo,
        postedAt : admin.firestore.Timestamp.fromDate(new Date())
    };

    admin.firestore().collection('Chores').add(newChore)
    .then(doc => {
        response.json({ message: `document ${doc.id} created successfully`});
    })
    .catch(err => {
        response.status(500).json({ error: 'something went wrong'});
        console.error(err);
    });
});

/*
const app = require('express')();
const firebaseConfig = {
    apiKey: "AIzaSyCntBiECLjGFAA5Z8ynh_mJUbBfXVNLkGw",
    authDomain: "carton-5d613.firebaseapp.com",
    databaseURL: "https://carton-5d613.firebaseio.com",
    projectId: "carton-5d613",
    storageBucket: "carton-5d613.appspot.com",
    messagingSenderId: "499457247630",
    appId: "1:499457247630:web:acb4b29d7e217f6ee43cdf",
    measurementId: "G-J0QR0QV1RG"
  };


const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

app.get('/chores', (req, res) => {
    admin
        .firestore()
        .collection('Chores')
        .orderBy('postedAt', 'desc')
        .get()
        .then((data) => {
            let chores = [];
            data.forEach((doc) => {
                chores.push({
                    choreId: doc.id,
                    chore: doc.data().chore,
                    userSubmitted : doc.data.userSubmitted,
                    userDo: doc.data().userDo,
                    postedAt: doc.data().postedAt
                });
            });
            return res.json(chores);
        })
        .catch((err) => console.error(err));
});



app.post('/chore', (req, res) => {

     const newChore = {
         chore : req.body.chore,
         userSubmitted : req.body.userSubmitted, 
         userDo : req.body.userDo,
         postedAt : new Date().toISOString()
     };
     admin
        .firestore()
        .collection('Chores')
        .add(newChore)
        .then((doc) => {
            res.json({ message: `document ${doc.id} created successfully`});
        })
     .catch((err) => {
         res.status(500).json({ error : 'something went wrong'});
         console.error(err);
     });
 });

// Signup route
app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle

    };
    // TODO validate data

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(data => {
        return res.status(201).json({ message : `user ${data.user.uid} signed up successfully`});
    })
    .catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code });
    });
});
 exports.api = functions.https.onRequest(app);
 */