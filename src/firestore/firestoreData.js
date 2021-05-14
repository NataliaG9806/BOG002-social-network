import { paintAllPosts } from '../controls/firestore.js';

export function RetrieveData(containerPosts){
    console.log(containerPosts)
    const db = firebase.firestore(); 
    db.collection("posts").orderBy("date", "desc")
    .onSnapshot((querySnapshot) => {
        containerPosts.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const docID = doc.id;
            const username = doc.data().userName;
            const UID = doc.data().UID;
            const location = doc.data().location;
            const description = doc.data().description;
            const likes = doc.data().likes;
            paintAllPosts(containerPosts, docID, username, UID, location, description, likes);
        });  
    });
}

export function sendData(db, location, description, uid, name, date){
    // Crear un postFF
    db.collection("posts").add({
        location: location,
        description: description,
        UID: uid,
        userName: name,
        likes: 0,
        date : date
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        location.reload();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export function updatePost(postID, location, description, likes){
    const db = firebase.firestore(); 
    let docToUpdate = db.collection("posts").doc(postID);
    // Set the "capital" field of the city 'DC'
    return docToUpdate.update({
        location: location,
        description: description,
        likes: likes
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        console.error("Ocurrió algún error al editar el post: ", error);
    });
}

export function deletePost(postID){
    const db = firebase.firestore(); 
    db.collection("posts").doc(postID).delete().then(() => {
        console.log(postID, "Document successfully deleted!");
        // RetrieveData();
    }).catch((error) => {
        console.error("Ocurrió algún error al eliminar el post: ", error);
    });
}

export function editPost(postID, postuser, locationEdit, descriptionEdit){
    const db = firebase.firestore(); 
    console.log(postID, postuser);
    console.log( locationEdit, descriptionEdit);
    db.collection("posts").doc(postID).set({
        location: locationEdit,
        description: descriptionEdit,
        UID: postID,
        userName: postuser,
        likes: 0,
        date: Date(Date.now())
    })
    .then(() => {
        console.log("documento editado!");
        window.location.hash = '#home';
    })
    .catch((error) => {
        console.error("Ocurrió algún error al editar el post: ", error);
    });
}
