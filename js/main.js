
const html = document.querySelector('html');
const themeBtn = document.getElementById('theme');

const getHeaderTheme = html.style.getPropertyValue('--header-color');
console.log(getHeaderTheme);

themeBtn.addEventListener('click' , (event) =>{

    event.preventDefault();
    
    html.style.setProperty('--header-color' , '#4885ed');
});

