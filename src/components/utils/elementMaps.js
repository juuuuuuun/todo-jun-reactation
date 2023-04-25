const main = document.querySelector("#main");
const backgroundImg = document.querySelector("#background-img");
const logo = document.querySelector("#logo");
const header = document.querySelector('.header-menu');
const weather = document.querySelector(".weather");
const weatherProject = document.querySelector(".project");
const weatherIcon = document.querySelector(".weather-icon");
const weatherTemp = document.querySelector(".weather-temp");
const weatherCity = document.querySelector(".weather-city");
const time = document.querySelector('.time');
const askSection = document.querySelector(".ask-name");

const formName = document.querySelector('.type-your-name-form');
const formEmail = document.querySelector('.type-your-email-form');
const formPw = document.querySelector('.type-your-pw-form');

const inputSection = document.querySelector('.input-your-name');
const inputEmail = document.querySelector('.input-your-email');
const inputPwSection = document.querySelector('.input-your-pw');
const continueButton = document.querySelector('.continue-btn');
const changeNameBtn = document.querySelector('.change-name-btn');
const stayLoggedOutBtn = document.querySelector('.stay-logged-out-btn');
const emailBtn = document.querySelector('.email-btn');
const registerBtn = document.querySelector('.register-btn');

const footerMenu = document.querySelector('.footer-options')
const footerBackgroundImgInfo = document.querySelector('.background-img-info');

export const elementMaps = {
    main, 
    backgroundImg,    
    logo, 
    header,
    weather, 
    weatherCity,
    weatherIcon,
    weatherProject,
    weatherTemp,
    time, 
    askSection,
    formName,
    formEmail,
    formPw,
    inputSection, 
    inputEmail,
    inputPwSection, 
    continueButton, 
    changeNameBtn,    
    stayLoggedOutBtn, 
    emailBtn, 
    registerBtn,
    footerMenu,
    footerBackgroundImgInfo,
};