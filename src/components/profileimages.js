export function profileimages() {
    const imagenes = `
      <style>
      .file_profile{´
          display: block;
          width: 15vw;
          height: 10vh;
          position: absolute;
          top:8vh;
          left:3vw;
      }
      .imagePhoto{
          width: 6vw;
          background-size: 20%;
          display:flex; 
          margin: 11vh 0 0 54vw;
          border-radius:10px;
          cursor:pointer;
        }
        progress {
          -webkit-writing-mode: horizontal-tb !important;
          appearance: auto;
          box-sizing: border-box;
          display: inline-block;
          height: 1em;
          width: 10em;
          vertical-align: -0.2em;
          margin-left:25vw;
      }
    @media (min-width: 1200px) {
      .file_profile{
        display: block;
        width: 15vw;
        height: 10vh;
        position: absolute;
        top:3vh;
        left:3vw;
      }
      .imagePhoto{
          width: 2.2vw;
          height: 4vh;
          background-size: 20%;  
          display:flex; 
          margin: 0.7vh 0 0 8.5vw;
          border-radius:20px;
          cursor:pointer;
          background:#ffffff;
          padding: 0 0.2vw 0 0.2vw;
          border:2px solid #ffffff;
      }
      progress{
        -webkit-writing-mode: horizontal-tb !important;
        appearance: auto;
        box-sizing: border-box;
        display: inline-block;
        height: 1em;
        width: 10em;
        vertical-align: -0.2em;
        margin-left:1.5vw;
      }
     }
  </style>
   <div class="file_profile">
   <progress value="0" max="100" id="uploader"></progress>
   <form action="" id="form_images_perfil">
   <label class="btn-file">
   <slot name=fileusers"><input type="file" name="fichero" id="fichero" hidden="hidden"><slot>
   <img class="imagePhoto" src="assets/imagesIcon/foto.png"
   </label>
   </form>
   </div>`;
    return imagenes;
  }