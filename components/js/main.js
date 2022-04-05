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
        displayMode.innerHTML = 'light_mode';
    } else if(localStorage.getItem('theme') === 'dark'){
        mode.href = './components/css/dark.css';
        if(bodyId === 'index') photo.src = './components/images/balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Basic Theme';
        displayMode.innerHTML = 'dark_mode'; 
    } else {
        localStorage.setItem('theme', 'basic');
        mode.href = './components/css/basic.css';
        if(bodyId === 'index') photo.src = './components/images/ich_balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Dark Theme';
        displayMode.innerHTML = 'light_mode';
    }
}

changeTheme();

displayMode.addEventListener('click', () => {
    if(localStorage.getItem('theme') === 'basic'){
        localStorage.setItem('theme', 'dark');
        mode.href = './components/css/dark.css';
        if(bodyId === 'index') photo.src = './components/images/balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Basic Theme';
        displayMode.innerHTML = 'dark_mode'; 
    } else if(localStorage.getItem('theme') === 'dark'){
        localStorage.setItem('theme', 'basic');
        mode.href = './components/css/basic.css';
        if(bodyId === 'index') photo.src = './components/images/ich_balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Dark Theme';
        displayMode.innerHTML = 'light_mode';
    } else {
        localStorage.setItem('theme', 'basic');
        mode.href = './components/css/basic.css';
        if(bodyId === 'index') photo.src = './components/images/ich_balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Dark Theme';
        displayMode.innerHTML = 'light_mode';
    }
});
