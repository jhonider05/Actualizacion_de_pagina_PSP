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

// Desplegar el menú en versiones moviles 

var menuMobileButton = document.getElementById("menu-mobile-siwtch");
var menuMobile = document.getElementById("menu-mobile");
var isVisible = 0;

function modificarTop() {
    if(isVisible){
        menuMobile.style.height = "0";
        isVisible = 0;
    }else{
        menuMobile.style.height = "93px";
        isVisible = 1;
    }
  
}

menuMobileButton.addEventListener("click", modificarTop);


// Header visible en la parte superior al hacer scroll por la web.


var header = document.getElementById("header");

var headerHeight = header.offsetHeight;

function fijarHeader() {
  var scroll = window.pageYOffset;

  if (scroll >= headerHeight) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.width = "100%"
    header.style.backgroundColor = "#fff"
  } else {
    header.style.position = "absolute";
    header.style.top = "";
  }
}

window.addEventListener("scroll", fijarHeader);


// Graficos

var barChartCanva = document.getElementById("myChartBar")

var barChart = new Chart(barChartCanva,{
    type: "bar",
    data:  {
      labels: ["Marzo","Abril","Mayo"],
      datasets: [{
        label: 'Proyectos Realizados',
        data: [12, 45, 60],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)'
        ],
        borderWidth: 1,
      }]
    },
    options: {
        responsive: true
    },
    maintainAspectRatio: false
    
});

barChart.canvas.parentNode.style.height = '200px';
barChart.canvas.parentNode.style.width = '400px';








var pieChartCanva = document.getElementById("myChartPie")

var pieChart = new Chart(pieChartCanva,{
    type: "pie",
    data:  {
      labels: ["Apps","Juegos","Webs"],
      datasets: [{
        label: 'Distribucion Tipos de Proyectos',
        data: [35, 45, 120],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)'
        ],
        borderWidth: 1,
      }]
    },
    options: {
        responsive: true
    },
    maintainAspectRatio: false
    
});
pieChart.canvas.parentNode.style.height = '300px';
pieChart.canvas.parentNode.style.width = '400px';