import header from './jsObjects/headerObj.js';

const displayMode = document.getElementById('display-mode');
const mode = document.getElementById('mode');
const photo = document.getElementById('photo');
const bodyId = document.getElementById('index');
const langDe = document.getElementById('lang-de');
const langEn = document.getElementById('lang-en');

langDe.addEventListener('click', () => {
    header.language.setLanguage = 'deCH';
    changeTheme();
});

langEn.addEventListener('click', () => {
    header.language.setLanguage = 'enUS';
    changeTheme();
});

const changeTheme = () => {
    //console.log('Inside changeTheme()')
    if(localStorage.getItem('theme') === 'basic'){
        mode.href = header.url.modeHrefBasic;//'./enlightenment.css';
        if(bodyId === 'index') photo.src = header.url.photoSrcBasic;
        displayMode.title = header.language[header.language.setLanguage].displayModeLightTitle;
        displayMode.innerHTML = header.themeMode.displayModeLight;
    } else if(localStorage.getItem('theme') === 'dark'){
        mode.href = header.url.modeHrefDark;
        if(bodyId === 'index') photo.src = header.url.photoSrcDark;
        displayMode.title = header.language[header.language.setLanguage].displayModeDarkTitle;
        displayMode.innerHTML = header.themeMode.displayModeDark; 
    } else {
        localStorage.setItem('theme', 'basic');
        mode.href = header.url.modeHrefBasic;
        if(bodyId === 'index') photo.src = header.url.photoSrcBasic;
        displayMode.title = header.language[header.language.setLanguage].displayModeLightTitle;
        displayMode.innerHTML = header.themeMode.displayModeLight;
    }
}

changeTheme();

displayMode.addEventListener('click', () => {
    if(localStorage.getItem('theme') === 'basic'){
        localStorage.setItem('theme', 'dark');
        mode.href = header.url.modeHrefDark;
        if(bodyId === 'index') photo.src = header.url.photoSrcDark;
        displayMode.title = header.language[header.language.setLanguage].displayModeDarkTitle;
        displayMode.innerHTML = header.themeMode.displayModeDark; 
    } else if(localStorage.getItem('theme') === 'dark'){
        localStorage.setItem('theme', 'basic');
        mode.href = header.url.modeHrefBasic;
        if(bodyId === 'index') photo.src = header.url.photoSrcBasic;
        displayMode.title = header.language[header.language.setLanguage].displayModeLightTitle;
        displayMode.innerHTML = header.themeMode.displayModeLight;
    } else {
        localStorage.setItem('theme', 'basic');
        mode.href = header.url.modeHrefBasic;
        if(bodyId === 'index') photo.src = header.url.photoSrcBasic;
        displayMode.title = header.language[header.language.setLanguage].displayModeLightTitle;
        displayMode.innerHTML = header.themeMode.displayModeLight;
    }
});


//const url = '../json/language.json';
//const url = '../json/language.json';
/*fetch(url).then(response=>{
    return response.json();
}).then(data=>console.log(data.header.class.heading))*/
//const myJSON = JSON.parse(url);
console.log(header.class.heading);
