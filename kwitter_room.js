
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB-3sbXqZsM0DCFZRMKhi3qEq7abeglyr4",
      authDomain: "lets-chat-webapp-3e47f.firebaseapp.com",
      databaseURL: "https://lets-chat-webapp-3e47f-default-rtdb.firebaseio.com",
      projectId: "lets-chat-webapp-3e47f",
      storageBucket: "lets-chat-webapp-3e47f.appspot.com",
      messagingSenderId: "333205073723",
      appId: "1:333205073723:web:cb45960d489dcbdecb111e",
      measurementId: "G-HL6MV9T55L"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

   function addRoom(){
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
               purpose :"adding room name"
         });

         localStorage.setItem("room_name", room_name);

         window.location = "kwitter_page.html";
         }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
            //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}