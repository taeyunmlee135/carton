const functions = require('firebase-functions');
const admin = require('firebase-admin');

const app = require('express')();
admin.initializeApp();


app.get('/chores', (req, res) => {
    admin
        .firestore()
        .collection('Chores')
        .get()
        .then((data) => {
            let chores = [];
            data.forEach((doc) => {
                chores.push(doc.data()/*{ 
                    choreId: doc.id,
                    chore: doc.data().chore,
                    userSubmitted : doc.data.userSubmitted,
                    userDo: doc.data().userDo,
                    postedAt: doc.data().postedAt
                    
                }*/);
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



exports.api = functions.https.onRequest(app);
