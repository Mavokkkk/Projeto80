var listaConvidados=[];

function enviar (){
    var nome1=document.getElementById("convidado").value;
    listaConvidados.push(nome1);
    console.log(listaConvidados);
    document.getElementById("lista").innerHTML = listaConvidados;
    document.getElementById("convidado").value= "";





































}