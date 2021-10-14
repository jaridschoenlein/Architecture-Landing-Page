// dark mode
let localDarkMode = localStorage.getItem('darkMode'); 
let icon = document.querySelector('.toggle ion-icon')
let darkModeToggle = document.querySelector('.toggle');


let enableDarkMode = () => {
  document.body.classList.add('darkMode');
  darkModeToggle.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
  localStorage.setItem('localDarkMode', 'enabled');
}

let disableDarkMode = () => {
  document.body.classList.remove('darkMode');
  darkModeToggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
  localStorage.setItem('localDarkMode', null);
}


if (localDarkMode === 'enabled') { enableDarkMode() }


darkModeToggle.addEventListener('click', () => {
  
  localDarkMode = localStorage.getItem('localDarkMode'); 
  
  if (localDarkMode !== 'enabled') {
    enableDarkMode();

  } else {  
    disableDarkMode(); 
  }
});


// image change

addEventListener("load",() => { 
    var index = 0;
    const slides = document.querySelectorAll("img");
    const classHide = "hidden", count = slides.length;
    nextSlide();
    function nextSlide() {
        slides[(index ++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 1000);
    }
});

