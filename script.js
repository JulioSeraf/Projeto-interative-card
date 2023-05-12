const posConfirm = document.getElementById('posConfirm');
const butConfirm = document.getElementById('pos');
const form = document.getElementById('login');
const butEnviar = document.getElementById('but-enviar');
const mes = document.getElementById('imes');
const anos = document.getElementById('ianos');
let nome = document.getElementById('inome');
let senha = document.getElementById('inum');
let cvc = document.getElementById('icvc');
let text = document.getElementById('tex');
let cardNum = document.getElementById('cardNum');
let cardName = document.getElementById('cardName');
let cardAnos = document.getElementById('cardAnos');
let cardCvc = document.querySelector('.cardCvc');

senha.addEventListener('input',()=>{cardNum.textContent = senha.value});
nome.addEventListener('input',()=>{cardName.textContent = nome.value});
mes.addEventListener('input',()=>{cardAnos.textContent = mes.value +'/'+ anos.value});
anos.addEventListener('input',()=>{cardAnos.textContent = mes.value +'/'+ anos.value});
cvc.addEventListener('input',()=>{cardCvc.textContent = cvc.value});
const display = (res) =>{
    if(res == true){
        text.style.display = 'block';
    }else{
        text.style.display = 'none';
    }

}
function blackColor(){
    nome.style.border = '1px solid black';
    senha.style.border = '1px solid black';
    mes.style.border = '1px solid black';
    anos.style.border = '1px solid black';
    cvc.style.border = '1px solid black';
}
butEnviar.addEventListener('click',(e)=>{
    e.preventDefault();
    if(nome.value.length < 5 || nome.value.length > 25){
       var text = document.getElementById('nameText');
        text.style.display = 'block';
        nome.style.border = '1px solid red';
        }else if (senha.value.length < 16){      
            blackColor();
            var notext = document.getElementById('nameText');
            notext.style.display = 'none';
            text = document.getElementById('numberText');
            text.style.display = 'block';
            senha.style.border = '1px solid red';
        }else if(mes.value.length < 2 || anos.value.length < 2){
            blackColor();
            var notext = document.getElementById('numberText');
            notext.style.display = 'none';
            text = document.getElementById('dateText');
            text.style.display = 'block';
            mes.style.border = '1px solid red';
            anos.style.border = '1px solid red';
        }else if(cvc.value.length < 3 ){ 
            blackColor();
            var notext = document.getElementById('dateText');
            notext.style.display = 'none';
            text = document.getElementById('cvcText');
            text.style.display = 'block';
            cvc.style.border = '1px solid red';
        }else{
            blackColor();
            var notext = document.getElementById('cvcText');
            notext.style.display = 'none';
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

