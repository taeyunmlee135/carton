const admin = require('firebase-admin');
const serviceAccount = require('./Carton-58c8fe6d0737.json')


admin.initializeApp({ credential: admin.credential.cert(serviceAccount)}); 

const db = admin.firestore();

module.exports = { admin, db };