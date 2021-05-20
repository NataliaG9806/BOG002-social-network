export function RetrieveData(callback, containerPosts, permise, imageLike){
    const db = firebase.firestore(); 
        db.collection("posts").orderBy("date", "desc")
        .onSnapshot((querySnapshot) => {
            callback(querySnapshot, containerPosts, permise, imageLike);
        });
}

export function retrieveUserPosts(name){
    const db = firebase.firestore();
    return db.collection("posts").where("userName", "==", name).get();
}

export function sendData(db, location, description, uid, name, date){
    return db.collection("posts").add({
        location: location,
        description: description,
        UID: uid,
        userName: name,
        likes: 0,
        date : date,
        likeable: true
    }) 
}

export function deletePost(postID){
    const db = firebase.firestore(); 
    db.collection("posts").doc(postID).delete().then(() => {
        console.log(postID, "Document successfully deleted!");
    }).catch((error) => {
        console.error("Ocurrió algún error al eliminar el post: ", error);
    });
}

export function updatePost(postID, postuser, locationEdit, descriptionEdit){
    const db = firebase.firestore(); 
    let docToUpdate = db.collection("posts").doc(postID);
    return docToUpdate.update({
        location: locationEdit,
        description: descriptionEdit,
        UID: postID,
        userName: postuser,
        date: Date(Date.now())
    });
}

export function updateLikes(postSelected, newLikes){
    const db = firebase.firestore(); 
    db.collection("posts").doc(postSelected).update({
        likes: newLikes
    });
}
