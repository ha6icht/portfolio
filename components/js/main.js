import header from './jsObjects/headerObj.js';

const displayMode = document.getElementById('display-mode');
const mode = document.getElementById('mode');
const photo = document.getElementById('photo');
const bodyId = document.getElementById('index')

const changeTheme = () => {
    //console.log('Inside changeTheme()')
    if(localStorage.getItem('theme') === 'basic'){
        mode.href = './components/css/basic.css';//'./enlightenment.css';
        if(bodyId === 'index') photo.src = './components/ich_balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Dark Theme';
        displayMode.innerHTML = header.themeMode.displayModeLight;
    } else if(localStorage.getItem('theme') === 'dark'){
        mode.href = './components/css/dark.css';
        if(bodyId === 'index') photo.src = './components/images/balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Basic Theme';
        displayMode.innerHTML = header.themeMode.displayModeDark; 
    } else {
        localStorage.setItem('theme', 'basic');
        mode.href = './components/css/basic.css';
        if(bodyId === 'index') photo.src = './components/images/ich_balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Dark Theme';
        displayMode.innerHTML = header.themeMode.displayModeLight;
    }
}

changeTheme();

displayMode.addEventListener('click', () => {
    if(localStorage.getItem('theme') === 'basic'){
        localStorage.setItem('theme', 'dark');
        mode.href = './components/css/dark.css';
        if(bodyId === 'index') photo.src = './components/images/balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Basic Theme';
        displayMode.innerHTML = header.themeMode.displayModeDark; 
    } else if(localStorage.getItem('theme') === 'dark'){
        localStorage.setItem('theme', 'basic');
        mode.href = './components/css/basic.css';
        if(bodyId === 'index') photo.src = './components/images/ich_balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Dark Theme';
        displayMode.innerHTML = header.themeMode.displayModeLight;
    } else {
        localStorage.setItem('theme', 'basic');
        mode.href = './components/css/basic.css';
        if(bodyId === 'index') photo.src = './components/images/ich_balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Dark Theme';
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
