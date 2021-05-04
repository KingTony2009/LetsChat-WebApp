
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCvXRuOD1AwhuMlr9Zv9Ur80Xwzw_EZalM",
      authDomain: "letschat-webapp-cc9be.firebaseapp.com",
      databaseURL: "https://letschat-webapp-cc9be-default-rtdb.firebaseio.com",
      projectId: "letschat-webapp-cc9be",
      storageBucket: "letschat-webapp-cc9be.appspot.com",
      messagingSenderId: "1004804134360",
      appId: "1:1004804134360:web:3a58abfa750c8f95964ead"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding User"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";


}



function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name- "+Room_names);
       row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";

}
function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location="index.html";
}