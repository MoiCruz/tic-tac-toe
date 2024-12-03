
const controlador = document.querySelectorAll(`.controlador`)

        console.log(controlador);
const teclas = ['', '', '', '', '', '', '', '', '']
const jugadas = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

 controlador.forEach((elemento) => {
  elemento.addEventListener('click', (e) => {
  const value = e.target.value;
    
   
    console.log(value);

})})



function operacion(){
  value.innerHTML = ""

  teclas.forEach((element, index) => {
    const teclas_template = `
         <div class="col g-3">
        <div class="rounded-4 d-flex align-items-center justify-content-center board_item">
          <svg class="icon cross ${index}">
            <use xlink:href="./icons/icon-x.svg#icon-x"></use>
          </svg>
          ${element}
        </div>
      </div>
    `
    value.innerHTML += teclas_template
       console.log(teclas_template);
  })
}
      operacion()

function ganador(){
  jugadas.forEach((lineas) => {
    let rol01 = teclas[lineas[0]]
    let rol02 = teclas[lineas[1]]
    let rol03 = teclas[lineas[2]]

    if(rol01 !== "" && rol01 === rol02 && rol02 === rol03)
   console.log(rol01, rol02, rol03);
})}
  ganador()












  
/*  const controlador = document.querySelectorAll('.controlador');
console.log(controlador);

// Inicialización de las teclas (vacías) y las jugadas
const teclas = ['', '', '', '', '', '', '', '', ''];
const jugadas = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

controlador.forEach((elemento) => {
  elemento.addEventListener('click', (e) => {
    const value = e.target.textContent; // Usamos textContent si no es un input con value
    
    // Mostramos el valor del elemento en la consola
    console.log(value);
  });
});

Necesitamos un valor para 'value', así que asignamos un elemento del DOM
const value = document.querySelector('.value-container');


function operacion() {
  value.innerHTML = ""; 

  teclas.forEach((element, index) => {
    const teclas_template = `
      <div class="col g-3">
        <div class="rounded-4 d-flex align-items-center justify-content-center board_item">
          <svg class="icon cross ${index}">
            <use xlink:href="./icons/icon-x.svg#icon-x"></use>
          </svg>
          ${element}
        </div>
      </div>
    `;
    value.innerHTML += teclas_template;
    console.log(teclas_template); 
  });
}


function ganador() {
  jugadas.forEach((lineas) => {
    let rol01 = teclas[lineas[0]];
    let rol02 = teclas[lineas[1]];
    let rol03 = teclas[lineas[2]];

    // Si las tres teclas son iguales y no vacías, mostramos los valores
    if (rol01 !== "" && rol01 === rol02 && rol02 === rol03) {
      console.log(rol01, rol02, rol03); // Mostramos las teclas ganadoras en consola
    }
  });
}

// Llamamos a la función 'ganador'
ganador();*/

              

