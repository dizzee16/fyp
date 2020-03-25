import * as functions from 'firebase-functions';
import admin = require('firebase-admin');


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const musicRef = admin.database().ref('/music/y3nYZ5N0sfA6sBCXydOO');
  export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

  export const music = functions.https.onRequest((request, response) => {
    let key = musicRef.child(request.body).key
    key = musicRef.child('/songName').key
    response.send(key?.valueOf)

  });
