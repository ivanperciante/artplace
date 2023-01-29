window.addEventListener('load', function(){
    let btn=document.querySelector('.buy-button');
    let id=document.querySelector('.productId').innerHTML;
    let name=document.querySelector('.productName').innerHTML;
    let main = document.querySelector('main')
    let carrito=JSON.parse(localStorage.getItem('carrito'))

    function removeElement(){
       
    }
    


    if(carrito == null){
        localStorage.setItem('carrito','[]')

    }else{

    }

    if(carrito==null){
        console.log('el carrito está vacio')
    }else{
        console.log('el carrito tiene productos')
    }

    btn.addEventListener('click', function() {
        let div = document.querySelector('.succesful-add')
        if(div){
               
                div.style.color = 'green'
        
            
        }

        const succesfullAdded = document.createElement('div')
        succesfullAdded.classList.add('succesful-add')
        main.appendChild(succesfullAdded)
        console.log(main);
        succesfullAdded.innerHTML= ' <p>Agregado al carrito</p><i class="fa-solid fa-circle-check"></i>'

        
        

        const deleteTimeout = setTimeout(removeDiv, 2000);

        function removeDiv() {
            let div = document.querySelector('.succesful-add')
            div.remove()
        }



        carrito=JSON.parse(localStorage.getItem('carrito'))

        let productFind=carrito.find((producto => producto.id === id))

        console.log('Product Find:', productFind);

        if(productFind == undefined ){
            let producto={
                id:id,
                name:name,
                quantity:1
            }

            if(carrito != null){
                let nuevoCarrito = JSON.parse(localStorage.getItem('carrito'))
                nuevoCarrito.push(producto)
                localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))

    
            }else{
                carrito.push(producto)
                localStorage.setItem('carrito', JSON.stringify(carrito))
  
            }

        }

        if(productFind != undefined){
            
            let nuevoCarrito=carrito.map((producto) => {
                if(producto.id==id){
           
                    return {...producto,
                         quantity:producto.quantity+1
                        }
                }
                return producto
            })

            if(carrito != null){
                localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
       
    
            }else{
                carrito.push(producto)
                localStorage.setItem('carrito', JSON.stringify(carrito))
     
            }
        }

    carrito=JSON.parse(localStorage.getItem('carrito'))

    let cartTotalAmount = document.querySelector('.cart-total-amount')

    let total = 0;

    carrito.forEach(element => {
        
        total = total+element.quantity
    });

    cartTotalAmount.innerHTML= `<p class='cart-amout-number'>${total}</p>`;

    });



})