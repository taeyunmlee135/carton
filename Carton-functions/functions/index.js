const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./../Carton-58c8fe6d0737.json')
const app = require('express')();

admin.initializeApp({ credential: admin.credential.cert(serviceAccount)}); 

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
firebase.initializeApp(config);

const db = admin.firestore();

// import cors, required because server and client are separated (allows external access from client)
const cors = require('cors');
app.use(cors({origin: true}));

app.get("/chores", (req, res, next) => {
  db
    .collection("Chores")
    .orderBy("postedAt", "desc") 
    .get()
    .then(data => {
      let chores = [];
      data.forEach(doc => {
        chores.push({
          choreId: doc.id,
          chore: doc.data().chore,
          userSubmitted: doc.data().userSubmitted,
          userDo: doc.data().userDo,
          postedAt: doc.data().postedAt
        });
      });
      return res.status(200).json(chores);   // return status 200 is the result was successfully fetched
    }) 
    .catch(err => console.error(err)); 
});

app.post("/chores", (req, res, next) => {
  const newChore = {
    chore: req.body.chore,
    userSubmitted: req.body.userSubmitted,
    userDo: req.body.userDo,
    postedAt: new Date().toISOString()
  };
  db
    .collection("Chores")
    .add(newChore)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
});


// Signup route 
app.post('/signup', (req, res) => {
  const newUser = {
      email: req.body.email,
      password: req.body.password,
      reenterPassword: req.body.reenterPassword,
      cartonID: req.body.cartonID
  };

  db.doc(`/users/${newUser.email}`).get()
    .then(doc => { // returns snapshot even if doc doesn't exist
      if(doc.exists) { // email already taken, return Bad Request
        return res.status(400).json({ email: 'this email is already associated with an account'});
      }
      else { // valid email; create account 
        return firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then(data => { // if we get here, user has been created
      return data.user.getIdToken(); // return auth token to user so they can request more data
    })
    .then(token => {
      return res.status(201).json({ token });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code});
    });
});


exports.api = functions.region('us-central1').https.onRequest(app); // name must match with firebase.json
