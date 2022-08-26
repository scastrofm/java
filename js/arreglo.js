var arreglo=['hols',20,true,20];
var arreglo2= new Array('ejemplo','200');
console.log(arreglo[2]);
console.log(arreglo.length);

for(var i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}

//agregar elemento al arreglo

arreglo.push("mundo");
//agrego al principio del arreglo
arreglo.unshift("dos");

//quitar elemento
arreglo.pop();
//quitar el principio
arreglo.shift();
//clona el arreglo
const arregloClonado=arreglo.slice();
//concatenar
arreglo2.concat(arreglo);
//buscar elemento si esta-devuelve true o false
arreglo.includes(20);
//si estay que posicion. sino esta devuelve -1
arreglo.indexOf(20);
arreglo.lastIndexOf(20);//si hay mas de uno devuelve la ultima posicion
//eliminar elementos
arreglo.splice(0,1);//desde posicion 0 1 elemento
//[1,5,5,7]->[5,5,7]