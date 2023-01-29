window.addEventListener('load', function(){

    let body = document.querySelector('body');
    let cards = document.querySelectorAll('.product');
    let activeButton = document.querySelector('#activeDarkMode')
    let titles = document.querySelectorAll('.featured')
    let innerBox = document.querySelector('.inner-border')
    let icon = document.querySelector('#activeDarkMode i')
    let carrusel = document.querySelector('.productCarousel');
    
    
    
    activeButton.addEventListener('click', function(e){
        console.log('asdasd');

        let profileTexts = document.querySelectorAll('.profile-texts')
        
        body.classList.toggle('darkBody')
        cards.forEach(card => {
            card.classList.toggle('darkCard')
        });
        titles.forEach(title => {
            title.classList.toggle('darkTitles')
        });
        activeButton.classList.toggle('dark-ligth-mode')
        activeButton.classList.toggle('ligth-mode')
        icon.classList.toggle('fa-moon')
        icon.classList.toggle('fa-sun')
        if(carrusel){
            carrusel.classList.toggle('dark-carrusel')
        }

        profileTexts.forEach(element => {
            element.classList.toggle('dark-profile')
        });
    })



})
