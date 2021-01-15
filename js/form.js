var botaoAdicionar = document.querySelector("#adicionar-paciente");
<<<<<<< Updated upstream
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
        
        //extraindo informacoes do paciente do form
    var paciente = obtemPacienteFormulario(form);

       //cria a tr e a td do paciente e valida
    var pacienteTr =  montaTr(paciente);

    if(!validaPaciente(paciente)){
        console.log("Paciente Inválido");
        return; //esse return se ele for executado faz com que saia da função sem adicionar meu paciente
    }

        //adicionando paciente na tabela
     var tabela =document.querySelector("#tabela-pacientes");
         tabela.appendChild(pacienteTr);
       
       //limpando campos formulario
    form.reset();  
=======
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteFormulario(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


    form.reset();
>>>>>>> Stashed changes
});

function obtemPacienteFormulario(form){


    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

   return paciente; 

}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome")); // anexar filho na mae
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;

}

<<<<<<< Updated upstream
function montaTd(dado,classe){
=======
function montaTd(dado, classe){
>>>>>>> Stashed changes
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return true;
    }else{
        return false;
    }
}