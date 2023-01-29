window.onload = function () {

    let searchInput = document.querySelector('.header-searchbar-input');
    let resultsDiv = document.querySelector('#search-bar');
    let main = document.querySelector('main');
    let lis = document.querySelectorAll('#lis');
    
    
    main.addEventListener('click', function(){
            resultsDiv.innerHTML = ''
            resultsDiv.classList.remove('search-results')
    })

    fetch('http://localhost:8000/api/list')
        .then(response => response.json())
        .then(products => {
            let allProducts = products.data
            const search = (e)=> {


                if(e.key != 'ArrowDown' && e.key != 'ArrowUp' ){

                    resultsDiv.classList.add('search-results')
                    resultsDiv.innerHTML = '';
                    let inputText = searchInput.value.toLowerCase();
                    allProducts.forEach(product => {
    
                          
    
                        let lowerCaseProduct = product.productName.toLowerCase();
                        if (lowerCaseProduct.indexOf(inputText) !== -1) {
                            resultsDiv.innerHTML += `
        
                        <li id='lis' class='' ><a id='slinks' href='http://localhost:8000/products/${product.id}'><nombre id='#productname'>${product.productName}</nombre><p>${product.creatorName}</p></a></li>
        
                        `
                        
                    }
                    
                    
                      
    
                    });
                    
                    if(resultsDiv.innerHTML === ''){
                        resultsDiv.innerHTML += `
                        
                        <li>No encontramos ese producto...</li>
                        
                        `
                    }
                }
                
            }
            let contador = 0;
            searchInput.addEventListener('keyup', search);
            searchInput.addEventListener('keydown', function(e){

                // Setea el contenido de la barra de búsqueda al elemento del array 'productNames'
                // haciendo uso de un contador (El contador es utilizado para encontrar el indice del elemento)
                let lis = document.querySelectorAll('#lis')
                if(e.key === 'ArrowDown'){
                    let productNames = document.querySelectorAll('#slinks nombre')
                    searchInput.value = productNames[contador].innerText
                    lis.forEach(e => {
                        e.classList.remove('search-results-hover')
                    });
                    lis[contador].classList.toggle('search-results-hover')
                    
                    // if(contador>0){

                    //     lis[(contador)].classList.toggle('search-results-hover');

                    // }
                    if(contador < productNames.length-1 && contador >= 0){
                        contador++
                    }
                }
                
                if(e.key === 'ArrowUp'){
                    let productNames = document.querySelectorAll('#slinks nombre')
                    lis[contador].classList.toggle('search-results-hover')
                    lis.forEach(e => {
                        e.classList.remove('search-results-hover')
                    });
                    if(contador < productNames.length && contador > 0){
                        contador--
                        searchInput.value = productNames[contador].innerText
                    }
                  
                    if(contador>0){
    
                        lis[(contador)].classList.toggle('search-results-hover');
                        
                    }
                }
                // Resetea el contador a cero cuando el usuario borra algún caracter.

                if(e.key === 'Backspace'){
                    contador= 0;
                }
            });
            

            
        })
}