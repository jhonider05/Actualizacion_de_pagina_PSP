// Scroll suave hasta la sección
var link = document.getElementById("menu__item1");
var sectionOne = document.getElementById("seccion1");

link.addEventListener("click", function(event) {
  event.preventDefault();
  var sectionTop = sectionOne.offsetTop;
  window.scroll({
    top: sectionTop,
    behavior: "smooth"
  });
});

var link = document.getElementById("menu__item2");
var sectionTwo = document.getElementById("seccion2");

link.addEventListener("click", function(event) {
  event.preventDefault();
  var sectionTop = sectionTwo.offsetTop;
  window.scroll({
    top: sectionTop,
    behavior: "smooth"
  });
});

var link = document.getElementById("menu__item3");
var sectionThree = document.getElementById("seccion3");

link.addEventListener("click", function(event) {
  event.preventDefault();
  var sectionTop = sectionThree.offsetTop;
  window.scroll({
    top: sectionTop,
    behavior: "smooth"
  });
});

// Validacion de datos


var form = document.getElementById("form");
var namee = document.getElementById("namee");
var surname = document.getElementById("surname");
var id = document.getElementById("id");
var phone = document.getElementById("phone");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  validarDatos();
});


function validarDatos() {

  var nameValue = namee.value.trim();
  var surnameValue = surname.value.trim();
  var idValue = id.value.trim();
  var phoneValue = phone.value.trim();

  
  var nameValid = false;
  var surnameValid = false;
  var idValid = false;
  var phoneValid = false;


  if (nameValue === "") {
    namee.setCustomValidity("El nombre es obligatorio");
    nameValid = false;
  } else {
    namee.setCustomValidity("");
    nameValid = true;
  }

  if (surnameValue === "") {
    surname.setCustomValidity("El apellido es obligatorio");
    surnameValid = false;
  } else {
    surname.setCustomValidity("");
    surnameValid = true;
  }

  if (idValue === "") {
    id.setCustomValidity("El número de cédula es obligatorio");
    idValid = false;
  } else {
    var idPattern = /^\d{10}$/;
    if (idPattern.test(idValue)) {
      id.setCustomValidity("");
      idValid = true;
    } else {
      id.setCustomValidity("El número de cédula debe tener 10 dígitos");
      idValid = false;
    }
  }

  if (phoneValue === "") {
    phone.setCustomValidity("El número de celular es obligatorio");
    phoneValid = false;
  } else {
    var phonePattern = /^\d{10}$/;
    if (phonePattern.test(phoneValue)) {
      phone.setCustomValidity("");
      phoneValid = true;
    } else {
      phone.setCustomValidity("El número de celular debe tener 10 dígitos");
      phoneValid = false;
    }
  }

  if (nameValid && surnameValid && idValid && phoneValid) {
    alert("Los datos son válidos. Se ha enviado el formulario");
  }
}
