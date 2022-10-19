
// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var letraMayuscula = nombre[0].toUpperCase()
  // Lo resuelve creando variables xq le resulta personalmente mas sencillo: var eligeUnnombre = invoca nombre que
  // nos pasaron x parametro en su posicion 0 para referir a la primer letra del string y le aplicamos un metodo
  // de string: .toUpperCase() para que esa primer letra la ponga en mayuscula.
  var letrasMinusculas = nombre.slice(1)
  // Aca creo otra variable para dejar en minuisculas las letras restantes. Utilizo el metodo de array: .slice(1)
  // y lo aplico en su posicion uno para que recorte a partir de la posicion 1 (segunda letra, en Mario, recorta
  // en M)
  return letraMayuscula + letrasMinusculas
  //Tb puedo hacerlo colocando solo return nombre[0].toUpperCase() + nombre.slice(1)
  
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
return cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
              /////var sumaTotal = numeros.reduce(function(acumulador, valorActual) {
               /////  return acumulador + valorActual
              /////})
              /////return cb(sumaTotal);

  // var suma = 0
  // for(let i = 1; i < numeros.length; i++){
  // suma = suma + numeros[i]
  // }
  // cb(suma)
  // El reduce al igual que el forEach y el maps, sintetiza mucho el codigo.
  // Al reduce le mando entre () una function. A nosotros no nos interesa como trabaja el reduce internamente
  // solo sabemos que le mandamos eso y nos devuelve el resultado que queremos.
  // El acumulador toma un array y hace algo que nosotros le indiquemos, en este caso vamos a sumar, pero podria
  // ser otra cosa; suma acumula y devuelve el resultado en acumulador. Ejemplo:
  
  var suma = numeros.reduce(function (acc, actual) {
   return acc + actual
  })
  
  cb(suma) 
  // EXPLICATION: Creo una variablwe que recibe el parametro y le aplico el metosdo.reduce
  //que recibe una funcion que va a neceseitar un acumulador y el numero actual de ntro array -IGNOSRAMOS COMO FUNCIONA EL
  //REDUCE SOLO SABEMOS lo QUE REQUIERE
  
  
  /////var sumaTotal = 0;
  //Hacemos una variable que guarde la suma de todos los enteros de un array
  // Luego hacemos un for dentro de esta variable, que recorra todos los numeros del array y los sume
  /////for (var numero of numeros){
  //Esta es otra forma de hacer un for, llamando a la variable numero y diciendole que la recorra
  
    /////sumaTotal = sumaTotal + numero;
    // Otra forma igual y mas resumida de ponerlo es: sumaTotal+= numero;
    //Aca ponemos la variable que cree y la igualo al valor sumaTotal + numero de la vuelta en la que esta 
    //recorriendo el array 
  /////}
  /////return cb(sumaTotal)
  //Luego el resultado lo tenemos que enviar con un callBack
}


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

   // CON FOR EACH: 
     array.forEach(function(elemento) {   
        cb (elemento);
      });

  //.forEach se mete al array y nos devuelve un elemento x ej 17 [17,2,3,4]
  //A ese elemento vamos a pasarle nuestro cb, que puede ser: 
  //// for (var i = 0; i < array.lenght; i++) {
  ////  cb(array[i]);
  //// }
  //forEach no devuelve otro array, solo modifica el array; en cambio maps y reduce siempre devuelven un array nuevo.
  //Doubles no funciona como doble, simplemente nos devuelve el array con la operacion que le indicamos (+,*,etc)
   
  //El cb es x convencion, nosotros no sabemos como se llama esa funcion que nos van a pasar, x convencion se pone cb.
  
  /////for (array of array){
}
 


function map(array, cb){

  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = array.map(function(el) {
    // Siempre el .map va a recibir una function
    return cb(el);
  });
  return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  
  ///  var miArray = [];
  //Declaro un nuevo array con el nombre que quiero
/// for (var key in array){
  ///    if (key[0] === "a") miArray.push(key)
/// }
//// return miArray;
  //Le voy a decir con for in que recorra todo el array. Este key va a recorrer y tomar cada valor del array
  //Con if le voy a preguntar si en cada vuelta key en su posicion cero es igual a 'a'; si es asi le digo que lo pushee
  //en el array nuevo
  //Al recorrer cada uno de los elementos de los string va a verificar si la primer letra es a, si es asi coloca al string
  //en el nuevo array

  /// FILTER INVOCA UNA FUNCION ANONIMA .filter(function(elemento)) que itera sobre
  ///  cada elemento. Ejemplo

   var arrayNuevo = array.filter(function(elemento){
        if(elemento[0] === "a"){
        return elemento;
     }
 });
 return arrayNuevo;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
