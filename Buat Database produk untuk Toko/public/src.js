var firebaseConfig = {
    apiKey : "AIzaSyD1-H3jw5NiD0j8Cu4-oZB8tL-RO56gWWM",
    authDomain : "databaseberkat-21d60.firebaseapp.com",
    projectId : "databaseberkat-21d60",
    storageBucket : "databaseberkat-21d60.appspot.com",
    messagingSenderId : "1000809437922",
    appId: "1:1000809437922:web:2d2164035fbd67c3f39cbb",
    measurementId : "G-TTKKHFBWE6",
    databaseURL : "https://databaseberkat-21d60-default-rtdb.firebaseio.com/"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();