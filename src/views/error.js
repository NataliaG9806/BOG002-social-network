export function pageError($containerGeneral){
    const containerError= document.createElement('div');
    containerError.className='viewError';
    $containerGeneral.appendChild(containerError);
    const image_logoE= document.createElement("img");
    image_logoE.src='assets/imagesIcon/Complete_logo.png';
    image_logoE.className ="imgError";
    containerError.appendChild(image_logoE);
    const titleError = document.createElement('h1');
    titleError.textContent = 'Lo sentimos';
    titleError.className='titleError';
    containerError.appendChild(titleError);
    const blockError = document.createElement('h3');
    blockError.textContent = 'Ha surgido un error inesperado';
    titleError.className='titleblock';
    containerError.appendChild(blockError);
    const image_fly= document.createElement("img");
    image_fly.src='assets/imagesIcon/avion1.png';
    image_fly.className ="imgErrorFly";
    containerError.appendChild(image_fly);
}