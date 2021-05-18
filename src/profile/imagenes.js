export function cargaimages() {
    const uploader = document.getElementById('uploader');
    const fileButton = document.getElementById('fichero');
    
    fileButton.addEventListener('change', (e) => {
      var file = e.target.files[0];
    
      var storageRef = firebase.storage().ref('imagesProfile/'+file.name);
      console.log(storageRef);
      var task = storageRef.put(file);
    
      mostrarimagenes();
    
    //  var imagesProfile = firebase.database().ref.child('imagesProfile');
    
     task.on('state_changed',
    
     function progress(snapshot){
      var percentaje = (snapshot.bytesTransferred / 
        snapshot.totalBytes) * 100;
        uploader.value = percentaje;
    
     },
    
     function error(err){
    
     },
     function complete(){
      var fotos = storageRef.getDownloadURL();
      console.log(fotos);  
        alert('Su imagen ha sido cargada con exito', fotos);
    
    })
    })
    
     function mostrarimagenes(){
    
     }
    //uploadTask.snapshot.ref.getDownloadURL()
    
    
    
    function createImageBDfirebase(nombreImagen,fotos){
    
    imagesProfile.push({nombre: nombreImagen, url:fotos});
    
    }
    
    
    //alert('Su imagen ha sido cargada con exito', fotos);
    }