window.addEventListener('load', function(){

    let hamburger = document.querySelector('#hamburger')
    let menu = document.querySelector('.deployed-hamburger')

    let profileImage = document.querySelector('.miniature-img-box-overflowH')
    let profileMenu = document.querySelector('.profile-menu-1')
    let profileButtons = document.querySelectorAll('.cerrar-sesion')
    

    hamburger.addEventListener('click', function(){

        
        let loged = document.querySelector('.miniature-img-box-overflowH')
        let profile = ''
        if(loged){
            profile = `<ul class='profile-list'>
            <li class><a href='/users/profile'>Mi perfil</a></li>
            <li><a href='/users/logout'>Cerrar sesión</a></li>
            </ul>`
        }
        if(!loged){
            profile = `<ul class='profile-list'>
            <li class><a href='/users/profile'>Iniciar sesión</a></li>
            </ul>`
        }
        
        menu.innerHTML= `

        <div class='deployed-menu-container'>
        <div class='x-container'>
        <i class="fa-solid fa-x"></i>
        </div>
        ${profile}
        

        <ul class='products-list'>
        
        <li><a href='/' >Inicio</a></li>
        <li><a href='/products' >Todo</a></li>
        <li><a href='/products/promotions/' >Promociones</a></li>

        </ul>
        </div>

        `
        let closeButton = document.querySelector('.fa-x')
        closeButton.addEventListener('click', function(){
            menu.innerHTML= ''
        })

        
      

    } )

    profileImage.addEventListener('click', function(e){
        e.preventDefault()
    profileMenu.classList.toggle('open-profile-menu')
    profileButtons.forEach(element => {
            element.classList.toggle('open-profile-menu')
        });

    })

  

})