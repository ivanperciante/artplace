window.addEventListener('load', function(){


    let carrito=JSON.parse(localStorage.getItem('carrito'))

    let cartTotalAmount = document.querySelector('.cart-total-amount')

    let total = 0;

    carrito.forEach(element => {
        
        total = total+element.quantity
    });

    cartTotalAmount.innerHTML= `<p class='cart-amout-number'>${total}</p>`;

})