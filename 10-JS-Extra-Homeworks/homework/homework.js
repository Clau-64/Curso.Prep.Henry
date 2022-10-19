

// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //return Object.entries(objeto) ESTA ES UNA FORMA SENCILLA DE HACERLO PERO LO HACEMOS TB CON FOR XQ ES LO QUE MAS NOS PIDEN
  let newArray = [];
  //Generamos un nuevo array vacio donde vamos poniendo los pares dado el valor que tenemos
  for (let algo in objeto) {
    //Creamos un bucle for donde let algo puede llamarse como quieran, puede ser i si quieren, in objeto refiere a que
    //es en un objeto que es el objeto que nos esta llegando a nosotros x argumento y vamos integrando la D con el 1, etc
    newArray.push([algo, objeto[algo]])

    //En el nuevo array pusheamos (agregamos a algo(i) un objeto algo que seria igual a i; es decir el objeto D con
    //algo 1 pusheado con la coma ([D, 1] . [D, 2]) y asi sucesivamente
  }
  return newArray;
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

      
 ///// let obj = {};
       //A nosotros nos llega un objeto lleno de letras y tenenmos que devolver un  objeto ordenado con los pares clave-
      //valor donde la clavwe sea la letra y el valor el numero de veces que la encontro
      //Creamos uns funcion con un objeto vacio donde vamos a ir poniendo todas las entradas. Aca tenemos una string x lo
      //tanto buscaremos metodos de string para trabajar y no de array
  ///// for (let i = 0; i < string.length; i++){
      //En el bucle for ponemos i = 0 xq vamos a empezar a correrlo desde el indice 0, i < string.lenght xq lo recorre-
      //remos hasta el final del array y que vaya de uno en uno con i++
  /////   if(!obj[string[i]]){
      // Aca tenemos que pensar de que forma le hacemos entender a la maquina que cuando al recorrer el array encuentre 
      // una letra repetida se de cuenta de ir sumandola.
      //Si en el objeto vacio no estamos encontrando letras  entonces va a ser igual a cero y con la formula sig
      //generamos un contador.
  /////     obj[string[i]] = 0;
      //Si el al recoorrer el string aparece una letra y es la primera vez que aparece se inicia un contador
      //esto es una negacion, es decir no va a encontrar la letra porque nuestro let esta vacio, y le decimos
      //que empiece con el contador en cero, luego
  /////  }
 /////   obj[string[i]] += 1;
    //Aca le decimos que si encuentra una letra x ej a, cuente 1, luego sigue recorriendo y cuando encuentra nuevamente 
    //esa letra ponga 2 y asi sucesivamente
  ///// }
 ///// return obj;

  let obj = {};

  for (let i = 0; i < string.length; i++){
    if(!obj[string[i]]){
      obj[string[i]] = 0;
    }
    obj[string[i]] += 1;
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var minuscula = ""
  var mayuscula = ""
  // Las variables que sean igual a un string vacio ""
  for (i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      mayuscula = mayuscula + s[i];
      //Empezamos a recorrer el string y preguntamos si s es exactamente igual a s mayuscula. Aca pregunta H es = a H, 
      //entonces la coloca en las mayusculas; sino la pone en la variable minuscula x el else
    } else{
      minuscula = minuscula + s[i];
      //si no es mayuscula, entonces es minuscula x lo tanto la agrega en las minusculas s+o+y
    }
  }
  return (mayuscula + minuscula)
  //TENER en cta que la suma en realidad devuelve contactenado; es decir lo devuelve asi HENRYsoy y no H + E + N
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var mirror = ""
     // hola como estas
     //"satse omoc aloh"      [[satse],[omoc],[aloh]]   [[aloh],[omoc],[satse]]     aloh omoc satse
    // con for desde atras     // con split                  // con reverse         //  con join(" ")
  for (let i = str.length -1; i >= 0; i--){
    //i va a ser igual al ultimo elemento(.lenght-1); i-- xq quiero recorrerlo desde atras para adelante.
    mirror += str[i]
  }
  return mirror.split(" ").reverse().join(" ")
    // retornamos mirror(nuestra variable), y hacemos un split en cada separacion que existe
  //Recordar que split es un metodo que nos va a devolver un array con cada parte que nosotros dividimos, en este caso
  //palabra x palabra quedando asi:[[satse],[omoc],[aloh]]
  //REVERSE para dar vuelta cada array o cada palabra, ej: [[aloh],[omoc],[satse]]
  //con el metodo JOIN volvemos a juntar todo. Las comillas con espacio de x medio es para que nos divida cada palabra
  //con un espacio
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var alReves = numero.toString().split('').reverse().join("")
  alReves = parseInt(alReves)
  if(numero === alReves){
    return "Es capicua"
  }
  return "No es capicua"


               /////var miNumero = numero.toString()
 //Creo mi variable y como me llega en numero le aplico toString para transformarla en String y poder recorrerlo con
 // un bucle for
                  /////var miNumeroInvertido = ""
 //Creo otra variable para guardar los numeros invertidos para poder compararlos
                /////for (var i =  miNumero.length - 1; i >= 0; i--){
    // Como  recorro la funcion transformada en string? Mi valor inicial va a ser el ultimo caracter menos 1, x lo que
    // el valor inicial de i sera la longitud de ese string menos 1. En que circunstancia quiero que se siga repitiendo
    // el bucle??? hasta que i sea >=0
                ///// miNumeroInvertido[i] += miNumero[i];
  // Quiero que le sume miNumeroInvertido a Minumero x eso coloco +=
            ////}
  //Afuera del bucle for, es decir una vez que se cumpla el recorrido, pregunto
              ///// if(miNumero === miNumeroInvertido) return "Es capicua"
  // Si esto se resuelve a true, sin necesidad de abrir llaves retorname "Es capicua"
  // Sino retorname "No es capicua"
               ////"No es capicua"

  }



function deleteAbc(cadena){
  //Define una función que elEimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
    var miCadena = ""
    for(var i = 0; i < cadena.length; i++){
      if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c")
      // Le voy preguntando miCadena es distinta a a, b y c, solo si es distinta a las 3 lo suma, sino no suma nada.
      miCadena += cadena[i]
    }
    return miCadena;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  /* Metodo sort() de arrays:
     Si la funcion de comparacion retorna -1 coloca a antes de b.
     Si la funcion de comparacion retorna 1 coloca b antes de a.
     Si la funcion de comparacion retorna 0 no modifica la posicion relativa entre ellos, pero si respecto del 
     resto del array.
  */
 function ordenCreciente (a,b){
  // defino mi funcion de callback y vamos a comparar las longitudes de las strings, entonces la primer condicion es
  // preguntar en que casos quiero que retorne menos 1
  if(a.length < b.length) return -1;
  //si la longitud de a es menor que la longitud de b colocame a antes que b, entonces return -1
  if(a.length > b.length) return 1;
  // segunda condicion, en que caso queremos que retorne b antes que a???
  return 0;
  //En el ultimo caso retorname 0
 }
 // El metodo sort devuelve un array ordenado, asi que retornamos arr.sort y le pasamos x callback una funcion de
 // comparacion:  "ordenCreciente()"" que recibe a y b
 
 
 return arr.sort((a, b) => ordenCreciente(a, b))
 //OTRA FORMA DE ESCRIBIRLO SERIA:
 // return arr.sort(function(a, b){
  // if(a.length < b.length) return -1;
  // if(a.length > b.length) return 1;
  //  return 0;})
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  // Voy a recorrer con 2 letras (i,j) los dos arreglos con un bucle for
 
  var newArray = [];
  
  for(i = 0; i < arreglo1.length; i++){
    
    for(j = 0; j < arreglo2.length; j++){

  if (arreglo1[i] === arreglo2[j]) {
    newArray.push(arreglo1[i]);
  //Si son exactamente iguales agregalo (pushealo) a newArray
  }
}
 }
    return newArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

