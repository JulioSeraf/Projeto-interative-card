const posConfirm = document.getElementById('posConfirm');
const butConfirm = document.getElementById('pos');
const form = document.getElementById('login');
const butEnviar = document.getElementById('but-enviar');
const mes = document.getElementById('imes');
const anos = document.getElementById('ianos');
let nome = document.getElementById('inome');
let senha = document.getElementById('inum').value.length;
let cardnum = document.getElementById('cardnum');
cardnum.innerHTML = senha
butEnviar.addEventListener('click',(e)=>{
    e.preventDefault();
    if(nome.value.length < 5 || nome.value.length > 25){
    alert('Nombre no corresponde, informe los datos correntamente');
}else if (senha.value.length < 16){
    alert('numero de la tarjeta no corresponde, informe los datos correntamente')
}else if(mes.value.length == 0 || anos.value.length == 0){
    alert('Informe os datos correntamente.')

}else{
    form.style.display = 'none'
    posConfirm.style.display = 'block';
}
})

posConfirm.addEventListener('click',(e)=>{
    e.preventDefault();
    form.style.display = 'block'
    posConfirm.style.display = 'none'

})