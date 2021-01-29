
let firebaseConfig = {
    apiKey: "AIzaSyAO318OxxTapgWVvr1VtQNnL6d57k-1BRM",
    authDomain: "made-chat-database.firebaseapp.com",
    projectId: "made-chat-database",
    storageBucket: "made-chat-database.appspot.com",
    messagingSenderId: "682746639788",
    appId: "1:682746639788:web:16521476d3ad0715ba7609",
    measurementId: "G-BYD19V3XNM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//  firebase.analytics();



const auth = firebase.auth();


let email, pass, snack, fullName;


function signIn(){
    email = document.getElementById('eMail').value;
    pass = document.getElementById('passWord').value;

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => alert(e.message));

}
function signUp(){
    email = document.getElementById('eMail2').value;
    pass = document.getElementById('passWord2').value;

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => alert(e.message));


}

function signOut(){
    auth.signOut();
    alert('signed out.')
    document.getElementById('redirect').click()
}

function sendInfoToDataBase(){
    fullName = document.getElementById('fullName').value
    email = document.getElementById('eMail').value
    pass = document.getElementById('passWord').value
    snack = document.getElementById('snack').value

    firebase.database().ref('account/'+fullName+count++).set({
        fullName: fullName,
        eMail: email,
        passWord: pass,
        favSnack: snack
    })

}

auth.onAuthStateChanged(function(user){
    if(user){
        //logged in
        document.getElementById('redirect').click()
    }else{
        //logged off
        document.getElementById('redirect2').click()
    }
})


