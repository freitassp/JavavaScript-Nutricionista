var filtroTabela = document.querySelector("#filtro-tabela");

filtroTabela.addEventListener("input", function(){
    
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = document.querySelector(".info-nome");
        var nome = tdNome.textContent;

        
    }
});