var titulo = document.querySelector(".titulo");
    
 var primeiroPaciente = document.querySelector("#primeiro-paciente");

 var tdPeso = primeiroPaciente.querySelector(".info-peso");
 var peso = tdPeso.textContent;

 var tdAltura = primeiroPaciente.querySelector(".info-altura");
 var altura = tdAltura.textContent;


 var tdImc = primeiroPaciente.querySelector(".info-imc");
 

  var pesoValido = true;
  var alturaValida = true;   
     

if(peso <= 0 || peso >= 1000 ){
        console.log("Peso Invalido");
        pesoValido = false;
        tdImc.textContent = "Peso Invalido!";
        
}
if(altura <= 0 || altura >= 3.00){
        console.log("altura Invalida");
        alturaValida = false;
        tdImc.textContent = "Altura Invalida!";
      
}

 if(pesoValido && alturaValida){
        var imc = peso/ (altura*altura);
        tdImc.textContent = imc;    
 }
 

       