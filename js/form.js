var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
        
        //extraindo informacoes do paciente do form
    var paciente = obtemPacienteFormulario(form);

       //cria a tr e a td do pacientehg
<<<<<<< HEAD
    var pacienteTr =  montaTr(paciente);
        //adicionando paciente na tabela
     var tabela =document.querySelector("#tabela-pacientes");
         tabela.appendChild(pacienteTr);
=======
        var pacienteTr = montaTr(paciente);

        //adicionando paciente na tabela
        var tabela =document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        form.reset();
>>>>>>> b504c2d9c20b9091b38bba9a8d13f5419eee60ea
       
       //lompando campos formulario
    form.reset();  
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
<<<<<<< HEAD

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

=======
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

}

function montaTd(dado, classe){
    var td = createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
>>>>>>> b504c2d9c20b9091b38bba9a8d13f5419eee60ea
    return td;

}