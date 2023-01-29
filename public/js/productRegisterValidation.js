window.onload = function(){

    let form = document.querySelector('.form');

    form.addEventListener('submit',(e)=>{

        let errors=[]

        let name = form.productName
        let description = form.description
        let price = form.price
        let stock=form.stock
        let img1 = form.productImage1
        let img2 = form.productImage2
        let img3 = form.productImage3

        if(name.value=="" || name.value.length<5 ){
            errors.push('campo obligatorio con minimo 5 caracteres')
            document.querySelector('#message-error').innerText = 'Campo obligatorio con mínimo 5 caracteres';
        }else{
            document.querySelector('#message-error').innerText = '';
        }
        if(price.value == '' || isNaN(price.value)==true ){
            errors.push('Debe ser un número')
            document.querySelector('#message-error3').innerText = 'Debe ser un número';
        }else{
            document.querySelector('#message-error3').innerText = '';
        }
        if(description.value.length<20){
            errors.push('min 20 caracteres')
            document.querySelector('#message-error2').innerText = 'Debe tener mínimo 20 caracteres';
        }else{
            document.querySelector('#message-error2').innerText = '';
        }
        if(stock.value == '' || isNaN(stock.value)==true ){
            errors.push('Debe ser un número')
            document.querySelector('#message-error4').innerText = 'Debe ser un número';
        }else{
            document.querySelector('#message-error4').innerText = '';
        }

        let archivoValidos = ['jpg', 'jpeg', 'png', 'gif']

        let fileName1=img1.value
        if(fileName1 !=''){
            let extension1 = String(fileName1.substr(fileName1.lastIndexOf('.')+1));
            let verificar1 = archivoValidos.find(file => file == extension1)
            if(verificar1 == 'undefined' || verificar1 == undefined){
                errors.push('Solo se permiten archivos jpg, jpeg, png o gif')
                document.querySelector('#message-error5').innerText = 'Solo se permiten archivos jpg, jpeg, png o gif';
            }else{
                document.querySelector('#message-error5').innerText = '';
        }}

        let fileName2=img2.value
        if(fileName2 !=''){
            let extension2 = String(fileName2.substr(fileName2.lastIndexOf('.')+1));
            let verificar2 = archivoValidos.find(file => file == extension2)
            if(verificar2 == 'undefined' || verificar2 == undefined){
                errors.push('Solo se permiten archivos jpg, jpeg, png o gif')
                document.querySelector('#message-error6').innerText = 'Solo se permiten archivos jpg, jpeg, png o gif';
            }else{
                document.querySelector('#message-error6').innerText = '';
        }}

        let fileName3=img3.value
        if(fileName3 !=''){
            let extension3 = String(fileName3.substr(fileName3.lastIndexOf('.')+1));
            let verificar3 = archivoValidos.find(file => file == extension3)
            if(verificar3 == 'undefined' || verificar3 == undefined){
                errors.push('Solo se permiten archivos jpg, jpeg, png o gif')
                document.querySelector('#message-error7').innerText = 'Solo se permiten archivos jpg, jpeg, png o gif';
            }else{
                document.querySelector('#message-error7').innerText = '';
        }}

        if(errors.length>0){
            e.preventDefault()
            swal({
                title: "Hemos encontrado un error en el formulario",
                text: "Algunos campos no cumplen los requerimientos",
              });
        }else{
            form.submit()
        }

    })
}