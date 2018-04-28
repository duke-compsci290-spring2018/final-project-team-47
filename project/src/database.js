// use Firebase as our database
import Firebase from 'firebase'

// configure and connect to database
var config = {
    apiKey: "AIzaSyBjNqSQkC9Fgfyw9-u-OA25jwdsIRKVIRk",
    authDomain: "world-cup-final.firebaseapp.com",
    databaseURL: "https://world-cup-final.firebaseio.com",
    projectId: "world-cup-final",
    storageBucket: "world-cup-final.appspot.com",
    messagingSenderId: "721061065500"
}
var fbApp = Firebase.initializeApp(config)

// global reference to remote database app
export const db = fbApp.database()