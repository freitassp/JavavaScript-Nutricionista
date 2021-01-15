var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
        
        //extraindo informacoes do paciente do form
    var paciente = obtemPacienteFormulario(form);

       //cria a tr e a td do paciente e valida
    var pacienteTr =  montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
       exibeMensagensDeErro(erros);
       return; //esse return se ele for executado faz com que saia da função sem adicionar meu paciente
    }

        //adicionando paciente na tabela
     var tabela =document.querySelector("#tabela-pacientes");
         tabela.appendChild(pacienteTr);
       
       //limpando campos formulario
    form.reset();  
});



function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

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

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente){
    var erros =[];
    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido ");
    } 
    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida"); 
    } 

    return erros;
      
}

