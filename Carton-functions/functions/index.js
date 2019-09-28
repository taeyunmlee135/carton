const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 exports.getChores = functions.https.onRequest((req, res) => {
    admin.firestore().collection('Chores').get()
    .then(data => {
        let chores = [];
        data.forEach(doc => {
            chores.push(doc.data());

        });
        return res.json(chores);
    })
    .catch(err => console.error(err))
 })

 exports.createChore = functions.https.onRequest((req, res) => {
     const newChore = {
         chore : req.body.chore,
         userSubmitted : req.body.userSubmitted, 
         userDo : req.body.userDo,
         postedAt : admin.firestore.Timestamp.fromDate(new Date())

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