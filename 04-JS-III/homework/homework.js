// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
  
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var NewArray = []
  for (i = 0; i < array.length; i++) {
  //quiero que pushee array + 1 a NewArray
  NewArray.push(array[i] + 1);
  }
  return NewArray;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  
  array.push(elemento);
    return array;


     /// return (array[array.length] = elemento)
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(" ");

}



function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (array [i] === elemento) {
     return true;
    }
  }
    return false;

// OTRA FORMA DE HACERLO ES:
  // return array.includes(elemento)
 
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i]; 
  }
  return suma;
    
    }
  



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  // OTRA FORMA DE HACERLO:
  // return agregarNumeros(resultadosTest) / resultadosTest.length;
 
  var suma = 0
  var promedios = []
  for(var i = 0; i < resultadosTest.length; i++) {
  suma = suma + resultadosTest[i];
   promedios = suma / resultadosTest.length;
  }
  return promedios;
  
// OTRA FORMA DE HACERLO:
  // return agregarNumeros(resultadosTest) / resultadosTest.length;
  // OTRA FORMA DE HACERLO:

  // var suma = 0;
 // var cantidad = resultadosTest.length
// for (var i = 0; i < resultadosTest.length; i++) {
// suma = suma + resultadosTest[i];
// }
// return suma / cantidad;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo = numeros[0] // indice o posicion 0, es el primer nro del array para tener una referencia de comparacion
  for(var i = 1; i < numeros.length; i++){ // i=1 xq ya observe en mi var el 0, entonces recorro el for a partir de 1
    if(numeros[i] > maximo) { 
      maximo = numeros[i] // si numeros[i] es mayor a maximo, entonces a maximo le asigno el valor de numeros[i]
    }
  }
  return maximo;
  /// Otra forma es:
  /// return Math.max(...numeros) los ... me traen todos los elementos del array
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  if(arguments.length < 1) return 0;
  // arguments es la palabra con la que yo llamo a los elementos de una funcion y funciona como un array.
  // Ej multiplicarArgumentos(4, 12, 8, 567); arguments [4, 12, 8, 567]; arguments.length = 4
  var total = arguments[0];
  for(var i = 1; i < arguments.length; i++){
    total = total * arguments[i];
  }
  return total;
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  
  var contador = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if(arreglo[i] > 18){
      contador = contador + 1
    }
  }
  return contador;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   


  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  }
    return "Es dia Laboral";
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var a = String(n)[0]

  if(Number(a) === 9){
  return true
}
  return false
/// Ver tb el metodo toString para resolverlo:
//         let numero            =              n.toString()   
// (creo una variable numero )           Y convierto en string con el metodo toString() a n, para poder acceder a la 
//                                       posicion, sino me toma el nro completo                                      
//  if(numero[0] === '9') {
 // return true;  
 // }
 // return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 

  for (var i = 0 ; i < arreglo.length; i++) {
    if(arreglo[i] === arreglo[i+1])
    {
      return true;
}
  }     
      return false;
      // Otra forma de hacerlo es preguntano si no es igual:
      //  if(arreglo[i] !== arreglo[i+1]) {
        //    return false;
        //  } return true;
      }
  



function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];

  for (var i = 0; i < array.length; i ++){

   if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
    nuevoArray.push(array[i])
    // agrego a nuevoArray lo que se encuentra en array[i]
   }
}
   if(nuevoArray.length < 3) {
   return "No se encontraron los meses pedidos"
   }
   return nuevoArray;

}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var nuevoArray = []
  for(var i= 0; i < array.length; i++){ 
    if(array[i] > 100){ 
      nuevoArray.push(array[i])
  }
}
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

 var array = []

 for(var i= 0; i < 10; i++){ 
  //  Ahora en cada iteracion vamos a decirle que a numero le sume 2:
 numero = numero + 2

 if(numero === i) break;
 //  Luego preguntamos si la suma es igual al indice i. Si es igual se interrumpe la ejecucion
 else{
  array.push(numero)
  // sino lo agrega a array
}
 }
 if (i<10) {
  return "Se interrumpió la ejecución";
}
 return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var array = []
  
  for(var i= 0; i < 10; i++)

    {if(i === 5) continue;
    
      numero = numero + 2;
      array.push(numero);
    }
  return array;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
}
