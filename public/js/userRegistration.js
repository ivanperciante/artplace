window.addEventListener('load', function(){

    let name = document.querySelector('#fullName');
    let nameError = document.querySelector('#fullNameError')

    name.addEventListener('change', function(){

        if(name.value.length <4){
            nameError.innerText = 'Debes ingresar un nombre de al menos 4 caractéres'
            name.classList.remove('input-correct-data')
            name.classList.add('input-wrong-data')
        }
        if(name.value.length >=4){
            name.classList.remove('input-wrong-data')
            name.classList.add('input-correct-data')
            nameError.innerText = ""
        }

    }) 

    let password = document.querySelector("#password")
    let passowrdError = document.querySelector("#passwordError")

    password.addEventListener('change', function(){
        if(password.value.length < 8){
            passowrdError.innerText = "La contraseña no puede tener menos de 8 caracteres";
            password.classList.remove('input-correct-data');
            password.classList.add('input-wrong-data');
        }else{
            password.classList.remove('input-wrong-data');
            password.classList.add('input-correct-data');
            passowrdError.innerText = ""
        }
    })
    
    let adress = document.querySelector("#adress");
    let adressError = document.querySelector("#adressError");

    adress.addEventListener('change', function(){
        if(adress.value === ""){
            adressError.innerText = "La direccion no puede ser un campo vacio";
            adress.classList.remove('input-correct-data');
            adress.classList.add('input-wrong-data');
        }else{
            adress.classList.remove('input-wrong-data');
            adress.classList.add('input-correct-data');
            adressError.innerText = ""
        }
    })

    let phone = document.querySelector("#phone")
    let phoneError = document.querySelector("#phoneError")

    phone.addEventListener('change', function(){
        if(phone.value.length < 10){
            phoneError.innerText = "El numero de telefono debe tener al menos 10 numeros";
            phone.classList.remove('input-correct-data');
            phone.classList.add('input-wrong-data');
        }else{
            phone.classList.remove('input-wrong-data');
            phone.classList.add('input-correct-data');
            phoneError.innerText = ""
        }
    })


    let email = document.querySelector("#email")
    let emailError = document.querySelector("#emailError")

    email.addEventListener('change', function(){
        const validEmail =  /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/;
        if(!validEmail.test(email.value)){
            emailError.innerText = "El correo debe poseer @";
            email.classList.remove('input-correct-data');
            email.classList.add('input-wrong-data');
        }else{
            email.classList.remove('input-wrong-data');
            email.classList.add('input-correct-data');
            emailError.innerText = ""
        }
    })

})

