const functions = require('firebase-functions');
const app = require('express')();


const { signup, login } = require('./handlers/users');

// import cors, required because server and client are separated (allows external access from client)
// const cors = require('cors');
// app.use(cors({origin: true}));

const cors = require('cors');
const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// users routes
app.post('/signup', cors(corsOptions), signup);
app.post('/login', cors(corsOptions), login);







app.get("/chores", cors(corsOptions), (req, res, next) => {
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

app.post("/chores", cors(corsOptions), (req, res, next) => {
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



// TODO: create new carton functionality


// TODO: authentication middleware (?)


exports.api = functions.region('us-central1').https.onRequest(app); // name must match with firebase.json
