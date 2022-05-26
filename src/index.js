
/*VALIDACION FORMULARIO DE INICIO DE SESION*/ 
document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("formulario")
      .addEventListener("submit", validarFormulario);
  });
    function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById("usuario").value;
    if (usuario.length == 0) {
      alert("No has escrito nada en el usuario");
      return;
    }
    var contraseña = document.getElementById("contraseña").value;
    if (contraseña.length == 0) {
      alert("No has escrito nada en la contraseña");
      return;
    }
    location.href=('MenuPrincipal.html');
  }

  /*VALIDACION DE FORMULARIO DE REGISTRO*/ 
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("registro")
      .addEventListener("submit", validarRegistro);
    });

    function validarRegistro(evento) {
    evento.preventDefault();
    var nombre = document.getElementById("nombrecompleto").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var contraseñaregistro = document.getElementById("contraseñaregistro").value;
    var contraseñaregistro1 = document.getElementById("contraseñaregistro1").value;
    var edad = document.getElementById("edad").value;
    var inDate = new Date(edad);
    var anio = inDate.getFullYear();
    var fecha_actual = new Date();
    var fecha_anio = fecha_actual.getFullYear();
    var edadverdadera = fecha_actual - anio;
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    if (contraseñaregistro != contraseñaregistro1){
        alert("La contraseña no coincide")
    }
    if(edadverdadera >= 18){
      alert("Eres menor de edad")
    }
    if (string1 != string2){
      document.getElementById('error').innerHTML = "Capchat Incorrecto"; 
             return true;
           }
    if (nombre.length == 0 || apellidos.length == 0 ||correo.length == 0 || contraseñaregistro.length == 0 || contraseñaregistro1.length == 0 || string1.length == 0 || string2.length == 0 || edad.length == 0){
      alert("Campos sin rellenar")
    }
    else{
      alert("Registro hecho");
      location.href=('MenuPrincipal.html');
    }
    }

    /*GENERAR CAPCHAT*/
    function generateCaptcha(){
             var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
             var i;
             for (i=0;i<4;i++){
               var a = alpha[Math.floor(Math.random() * alpha.length)];
               var b = alpha[Math.floor(Math.random() * alpha.length)];
               var c = alpha[Math.floor(Math.random() * alpha.length)];
               var d = alpha[Math.floor(Math.random() * alpha.length)];
              }
            var code = a + '' + b + '' + '' + c + '' + d;
            document.getElementById("mainCaptcha").value = code
          }
          
          function CheckValidCaptcha(){
              var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
              var string2 = removeSpaces(document.getElementById('txtInput').value);
              
          }

          /*CREAR NUEVO CAPCHAT*/
          function removeSpaces(string){
            return string.split(' ').join('');
          }

    /*CARRUSEL*/
    var slideIndex = 0;

      showSlides();

      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
}