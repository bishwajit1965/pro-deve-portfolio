let barbutton = document.querySelector('#sidebar-toggler-btn');
let header = document.querySelector('.left-navigation');

barbutton.onclick = () =>{
    barbutton.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    barbutton.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else {
        document.body.classList.remove('active');
    }
}
