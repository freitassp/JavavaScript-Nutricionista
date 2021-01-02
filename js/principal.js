var titulo = document.querySelector(".titulo");
    
 var primeiroPaciente = document.querySelector("#primeiro-paciente");

 var tdPeso = primeiroPaciente.querySelector(".info-peso");
 var peso = tdPeso.textContent;

 var tdAltura = primeiroPaciente.querySelector(".info-altura");
 var altura = tdAltura.textContent;


 var tdImc = primeiroPaciente.querySelector(".info-imc");
 var imc = peso/ (altura*altura);
     tdImc.textContent = imc

     
     

 console.log(primeiroPaciente);//tr
 console.log(tdPeso);//td q contem peso
 console.log(peso);//conteudo da td
 console.log(altura);//conteudo td altura
 console.log(imc)

 
 

       