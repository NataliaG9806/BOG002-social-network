import { sendData, retrieveUserPosts } from '../firestore/firestoreData.js';
import { AllPostsCard } from '../views/allPosts.js';
import { profile } from '../views/profile.js';
let name, email, photoUrl, uid, emailVerified, date; 

export function createPost() {
    const wcPost = document.querySelector("post-card");
    const location = wcPost.shadowRoot.querySelector(".ubication").value;
    const description = wcPost.shadowRoot.querySelector(".textAreapublic").value;
    if((location.length > 0) && (description.length > 0)){
      const db = firebase.firestore(); 
      console.log("Database", db);
      retrieveUserData();
      sendData(db, location, description, uid, name, date)
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          window.location.hash="#home";
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    }else{
      alert("Llena todos los campos para crear el post");  
    }
}
//containerPosts, docID, username, UID, location, description, likes, permise, imageLike
export function paintAllPosts(querySnapshot, containerPosts, permise, imageLike){
  let docID, username, UID, location, description, likes, ownPost;
  containerPosts.innerHTML = "";
    retrieveUserData();
    querySnapshot.forEach((doc) => {
    docID = doc.id;
    username = doc.data().userName;
    UID = doc.data().UID;
    location = doc.data().location;
    description = doc.data().description;
    likes = doc.data().likes;
    if(username == name){
      ownPost = true;
    }else{
      ownPost = false;
    }
    AllPostsCard(containerPosts, docID, username, location, description, likes, permise,  imageLike, ownPost);
}); 
}

export function retrieveUID(postContainer, permise, imageLike){
  retrieveUserData();
  profile(postContainer, name);
  retrieveUserPosts(name).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const docID = doc.id;
        const username = doc.data().userName;
        const location = doc.data().location;
        const description = doc.data().description;
        const likes = doc.data().likes;
        const ownPost = true;
        AllPostsCard(postContainer, docID, username, location, description, likes, permise, imageLike, ownPost);
    });
  });
}    
// .catch((error) => {
//       console.log("Error getting documents: ", error);
//   });

function retrieveUserData(){
  const user = firebase.auth().currentUser;
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; 
    date = Date(Date.now());
  }
}