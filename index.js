const frm = document.querySelector("form");
const respLucro = document.querySelector(".outLucro");
const respSaldo = document.querySelector(".outSaldo");

let  lucro = 0;



frm.addEventListener("submit", (e) => {
e.preventDefault();

let saldo = frm.inValue.value;

saldo = saldo.replace(/\./g, '').replace(',', '.');

if(isNaN(saldo) || saldo === ''|| saldo == 0 ){
alert("Falta informar o Saldo");
saldo = "";
frm.btnLimpar.dispatchEvent(new Event("click"));
frm.inValue.focus();
}else{
saldo = Number(saldo);    
lucro = saldo*0.02693258;

const saldoForm = saldo.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
const lucroForm = lucro.toFixed(2).replace('.',',');


respLucro.innerText=`Seu Possível Lucro a Receber:\nR$ ${lucroForm}`
respSaldo.innerText=`Saldo do FGTS:\nR$ ${saldoForm}`;
respLucro.style.display="block";
respSaldo.style.display="block";



}
frm.reset()
frm.inValue.focus();


});
frm.btnLimpar.addEventListener("click", () => {    
respLucro.innerText = "";
respSaldo.innerText = "";

});





