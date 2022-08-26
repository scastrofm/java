var empleados= new Array;
const maximo=3;
var contador=0;
function Guarda(){
    let name=document.getElementById("name").value;
    let surname=document.getElementById("surname").value;
    let cellphone=document.getElementById("cellphone").value;
    empleados.push(name+" "+surname+" "+cellphone);
    contador++;
    if(contador==maximo){
        document.getElementById("guardar").setAttribute("disabled", "disabled");
        for (let i=0;i<empleados.length;i++){
            document.getElementById("contador").innerHTML = document.getElementById("contador").innerHTML +
            empleados[i]+"<p>"
        }
    }
}

