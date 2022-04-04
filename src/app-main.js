const openMode = document.getElementById('display-mode');
const modeWindow = document.getElementById('mode-window');
const closeMode = document.getElementById('close-window');
const radio1 = document.getElementById('radio-1');
const radio2 = document.getElementById('radio-2');
const radio3 = document.getElementById('radio-3');
const buttonChange = document.getElementById('change');
const mode = document.getElementById('mode');
const photo = document.getElementById('photo');

const changeTheme = () => {
    //console.log('Inside changeTheme()')
    if(localStorage.getItem('theme') === 'enlightenment'){
        mode.href = './enlightenment.css';
        //photo.src = './images/ich_balmkirchli_adjusted.jpg';
        radio1.checked = true;
        radio2.checked = false;
        radio3.checked = false;
    } else if(localStorage.getItem('theme') === 'light'){
        mode.href = './light.css';
        //photo.src = './images/ich_balmkirchli_adjusted.jpg';
        radio1.checked = false;
        radio2.checked = true;
        radio3.checked = false;
    } else if(localStorage.getItem('theme') === 'dark'){
        mode.href = './dark.css';
        //photo.src = './images/balmkirchli_adjusted.jpg';
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = true;
    } else {
        localStorage.setItem('theme', 'enlightenment');
        mode.href = './enlightenment.css';
        //photo.src = './images/ich_balmkirchli_adjusted.jpg';
        radio1.checked = true;
        radio2.checked = false;
        radio3.checked = false;
    }
}

changeTheme();

openMode.addEventListener('click', () => {
    //console.log('Change Mode Clicked');
    //console.log(modeWindow);
    modeWindow.style.width = '100%';
});
closeMode.addEventListener('click', () => {
    modeWindow.style.width = '0';
})
radio1.addEventListener('click', () => {
    if(!radio1.checked) radio1.checked = true;
    if(radio2.checked) radio2.checked = false;
    if(radio3.checked) radio3.checked = false;
});
radio2.addEventListener('click', () => {
    if(!radio2.checked) radio2.checked = true;
    if(radio3.checked) radio3.checked = false;
    if(radio1.checked) radio1.checked = false;
});
radio3.addEventListener('click', () => {
    if(!radio3.checked) radio3.checked = true;
    if(radio1.checked) radio1.checked = false;
    if(radio2.checked) radio2.checked = false;
});
buttonChange.addEventListener('click', () => {
    let check;
    if(radio1.checked) check = 'enlightenment';
    else if(radio2.checked) check = 'light';
    else if(radio3.checked) check = 'dark';
    else alert('Bitte, wählen Sie ein Theme.')
    if(check === 'enlightenment') localStorage.setItem('theme', check);
    else if(check === 'light') localStorage.setItem('theme', check);
    else if(check === 'dark') localStorage.setItem('theme', check);
    changeTheme();
    modeWindow.style.width = '0';
});
