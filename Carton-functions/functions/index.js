const functions = require('firebase-functions');
const app = require('express')();
const admin = require('firebase-admin');


admin.initializeApp();


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
