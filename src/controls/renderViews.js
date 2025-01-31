import { renderFormRegister } from '../views/RegisterForm.js';
import { renderFormLogin } from '../views/LogInForm.js';
import { gridImage } from '../components/image-grid.js';
import { card } from '../components/register-login_card.js';
import { userRegistration} from './Register.js';
import { visibility } from '../components/visibilityPassword.js';
import { userLogIn } from './LogIn.js';
import { LogInGoogle } from '../controls/LogIn.js';
import { RetrieveData } from '../firestore/firestoreData.js'
import { HomeDesktop } from '../views/homeDesktop.js';
import { HomeMobile } from '../views/homeMobile.js';
import { profileimages } from '../components/profileimages.js';
import { cargaimages } from '../profile/imagenes.js';
import { createPostCard } from '../views/createPost.js';
import { pageError } from '../views/error.js';
import { editPostCard } from '../views/editPost.js';
import { createPost, retrieveUID } from '../controls/firestore.js';
import '../components/menu-mobile.js';
import '../components/menu-desktop.js';
import '../components/post-card.js';

function gridAndCard($containerGeneral) {
  const $containerRegisterLogin = document.createElement('div');
  $containerRegisterLogin.classList.add('root-container');
  gridImage($containerRegisterLogin);
  $containerGeneral.appendChild($containerRegisterLogin);
  const $newDiv = $containerRegisterLogin.appendChild(card());
  return $newDiv;
}

export function renderLogin($containerGeneral) {
  gridAndCard($containerGeneral).innerHTML += renderFormLogin();
  document.querySelector('.formHome').addEventListener('submit', userLogIn);
  visibility();
  document.querySelector('.buttonInicioGoogle').addEventListener('click', LogInGoogle);
  // console.log('ingresa render login');
}

export function renderRegister($containerGeneral) {
  console.log("register");
  gridAndCard($containerGeneral).innerHTML += renderFormRegister();
  document.querySelector('.formRegister').addEventListener('submit', userRegistration);
  visibility();
}

export function renderPost($containerGeneral, name){
  Menu($containerGeneral);
  document.querySelector('.body_container').innerHTML += createPostCard(name); 
  document.querySelector(".post_button").addEventListener('click', createPost);
}

export function renderProfile($containerGeneral, permise, imageLike){
  Menu($containerGeneral);
  const postContainer = document.querySelector('.body_container')
  // postContainer.innerHTML += profile();
  retrieveUID(postContainer, permise, imageLike);
  document.querySelector('.profileUser').innerHTML += profileimages();
  cargaimages();
}

export function renderError($containerGeneral){
  pageError($containerGeneral);
}

export function renderHome($containerGeneral, permise, imageLike){
  Menu($containerGeneral);
  const containerPosts = document.createElement('div');
  containerPosts.classList.add("containerPosts");
  document.querySelector('.body_container').appendChild(containerPosts);
  containerPosts.innerHTML='';
  RetrieveData(containerPosts, permise, imageLike);
}

export function Menu($containerGeneral) {
  const mql = window.matchMedia('(max-width: 768px)');
  function pantalla(mobileView) {
    if (mobileView) {
      $containerGeneral.innerHTML= HomeMobile();    
    } else {
      $containerGeneral.innerHTML= HomeDesktop();
    }
  }
  mql.addEventListener('change', (e) => {
    const mobileView = e.matches;
    pantalla(mobileView);
    location.reload();
  });
  const mobileView = mql.matches;
  pantalla(mobileView);
}

