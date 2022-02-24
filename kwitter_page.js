//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCtJzwsa2O5Wx11G_-RvBEBdLYVorfiOdU",
      authDomain: "kwitter-2-b9368.firebaseapp.com",
      databaseURL: "https://kwitter-2-b9368-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-b9368",
      storageBucket: "kwitter-2-b9368.appspot.com",
      messagingSenderId: "495485129993",
      appId: "1:495485129993:web:279154113d7130f8676fd8",
      measurementId: "G-1KGFB78392"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name")

     function send()
     
     {  
       msg = document.getElementById("msg").ariaValueMax;
       firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
       });

       document.getElementById("msg").value = "";

      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
