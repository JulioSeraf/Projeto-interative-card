const posConfirm = document.getElementById('posConfirm');
const butConfirm = document.getElementById('pos');
const form = document.getElementById('login');
const butEnviar = document.getElementById('but-enviar');
const mes = document.getElementById('imes');
const anos = document.getElementById('ianos');
let nome = document.getElementById('inome');
let senha = document.getElementById('inum');
butEnviar.addEventListener('click',(e)=>{
    e.preventDefault();
    if(nome.value.length < 5 || nome.value.length > 25){
        nome.style.border = '1px solid red'
       alert('Nombre no corresponde, informe los datos correntamente');
        }else if (senha.value.length < 16){
            nome.style.border = 'black'
            senha.style.border = '1px solid red'
            alert('numero de la tarjeta no corresponde, informe los datos correntamente');
        }else if(mes.value.length == 0 || anos.value.length == 0){
            senha.style.border = 'black'
            mes.style.border = '1px solid red'
             alert('Informe los datos de validad correntamente.');
        }else{
            mes.style.border = 'black';
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

