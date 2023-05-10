const posConfirm = document.getElementById('posConfirm');
const butConfirm = document.getElementById('pos');
const form = document.getElementById('login');
const butEnviar = document.getElementById('but-enviar');
const mes = document.getElementById('imes');
const anos = document.getElementById('ianos');
let nome = document.getElementById('inome');
let senha = document.getElementById('inum');
let cvc = document.getElementById('icvc');
butEnviar.addEventListener('click',(e)=>{
    e.preventDefault();
    if(nome.value.length < 5 || nome.value.length > 25){
        nome.style.border = '1px solid red'
       alert('Nombre no corresponde, informe los datos correntamente');
        }else if (senha.value.length < 16){
            nome.style.border = 'black';
            senha.style.border = '1px solid red'
            alert('numero de la tarjeta no corresponde, informe los datos correntamente');
        }else if(mes.value.length < 2 || anos.value.length < 2){
            nome.style.border = 'black';
            senha.style.border = 'black';
            mes.style.border = '1px solid red';
            anos.style.border = '1px solid red'
             alert('Informe los datos de validad correntamente.');
        }else if(cvc.value.length < 3 ){ 
            senha,mes,anos,cvc,nome.style.border = 'black';
            // mes.style.border = 'black';
            // anos.style.border = 'black';
            cvc.style.border = '1px solid red';
            alert('Informe o datos CvC corretamente')
        }else{
            senha,mes,anos,cvc,nome.style.border = 'black';
            form.style.display = 'none';
            posConfirm.style.display = 'block';
        }
    }
)

posConfirm.addEventListener('click',(e)=>{
    e.preventDefault();
    form.style.display = 'block';
    posConfirm.style.display = 'none';

})

