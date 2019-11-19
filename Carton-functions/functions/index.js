const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('express')();
const {google} = require('googleapis');

admin.initializeApp(); 

// import cors, required because server and client are separated (allows external access from client)
const cors = require('cors');
app.use(cors({origin: true}));

app.get("/chores", (req, res, next) => {
  admin
    .firestore()
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
  admin
    .firestore()
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

// Google Calendar API stuff
function getCredentials() {
  return {"web":{"client_id":"499457247630-7gmg3e4if4af690nt1klo3h66sfbsasd.apps.googleusercontent.com",
  "project_id":"carton-5d613",
  "auth_uri":"https://accounts.google.com/o/oauth2/auth",
  "token_uri":"https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
  "client_secret":"ib0T1NL7uSKjY4LnFKJZn336",
  "javascript_origins":["https://us-central1-carton-5d613.cloudfunctions.net"]}}
  //Replace this empty object with credentials.json contents
}
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

exports.authorize = functions.https.onRequest((request, response) => {
    console.log('Authorize called')

    const {client_secret, client_id, redirect_uris} = getCredentials().web
    if(!client_secret || !client_id || !redirect_uris)
        response.send("Credentials missing").status(500)

    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])
    let url = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    })
    response.send(url)
})


exports.token = functions.https.onRequest((request, response) => {
    console.log('token called ' + JSON.stringify(request.body))
    const code = request && request.query && request.query.code || null
    if(!code)
        response.send("code missing").status(400)

    const {client_secret, client_id, redirect_uris} = getCredentials().web
    if(!client_secret || !client_id || !redirect_uris)
        response.send("Credentials missing").status(500)

    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])
    oAuth2Client.getToken(code, (err, token) => {
        if(err) {
            console.log('err ' + err.message)
            response.status(500).send("Unable to generate token " + err.message)
        }
        oAuth2Client.setCredentials(token)

        fetchEvents(oAuth2Client)
        response.send("Access Granted. Please close this tab and continue.")
    })
})


function fetchEvents(auth) {
    const calendar = google.calendar({version: 'v3', auth})
    calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const events = res.data.items;
        if (events.length) {
          console.log('Upcoming 10 events:');
          events.map((event, i) => {
            const start = event.start.dateTime || event.start.date;
            console.log(`${start} - ${event.summary}`);
          });
        } else {
          console.log('No upcoming events found.');
        }
    })
}

exports.api = functions.region('us-central1').https.onRequest(app); // name must match with firebase.json
