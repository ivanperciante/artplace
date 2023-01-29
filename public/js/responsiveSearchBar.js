window.addEventListener('load',function(){

    let mediaqueryList = window.matchMedia("(max-width: 480px)");
mediaqueryList.addListener( function(EventoMediaQueryList) {
      console.log('Ejecutado el listener', EventoMediaQueryList);
      console.log(mediaqueryList.matches);
});
let searchForm = document.querySelector('.form-header-searchbar')
let searchInput = document.querySelector('.header-searchbar-input')
let lupa = document.querySelector('.submit-header-searchbar')
let searchResults = document.querySelector('#search-bar')

    if(mediaqueryList.matches){
        searchInput.addEventListener('focus', function(){

            searchForm.classList.add('responsive-search-bar')
            searchInput.style.width = '85%'
            const element = document.createElement('div')
            searchForm.appendChild(element)
            element.innerHTML = ` <div class='x-container'>
            <div class="x"><i class="fa-solid fa-xmark"></i></i></div>
            </div>`
            searchInput.classList.add('responsive-input');
            lupa.classList.add('responsive-lupa')
            searchResults.classList.add('responsive-results')
            searchResults.style.display = 'block'

            let xContainer = document.querySelector('.x-container')
            xContainer.addEventListener('click', function(){
                console.log('asdasd');
                xContainer.remove()
                searchForm.classList.remove('responsive-search-bar')
                searchInput.classList.remove('responsive-input');
                lupa.classList.remove('responsive-lupa');
                searchResults.classList.remove('responsive-results');
                searchResults.style.display = 'none'
                
                let x = document.querySelector('.x')
                xContainer.remove()
              
            })
        })
    }

})