var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes")
tabela.addEventListener("dblclick", function(event){
console.log(event.target);
event.target.parentNode.remove(); // evento.  alvo(onde cliquei) . pai do alvo . remove
    // this.remove(event.target);
});
// pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//        console.log("Fui clicado com duplo clique");
//        this.remove();

//     });

