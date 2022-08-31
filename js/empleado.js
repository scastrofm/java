var empleados= new Array;
const maximo=3;
var contador=0;
function Guarda(){
    let name=document.getElementById("name").value;
    let surname=document.getElementById("surname").value;
    let cellphone=document.getElementById("cellphone").value;
    let birthyear=document.getElementById("birthyear").value;
    let price=document.getElementById("price").value;

    var datos={
        name1: name,
        surname1: surname,
        cell1: cellphone,
        birth: birthyear,
        price1: price, 
    }

    empleados.push(datos);
    contador++;
    if(contador==maximo){
        document.getElementById("guardar").setAttribute("disabled", "disabled");
        empleados.sort((a,b)=>b.birth-a.birth);
        let total = empleados.reduce((acumulador, dato) => acumulador + parseInt(dato.price1), 0);
        document.getElementById("total").innerHTML=
        document.getElementById("total").innerHTML+"El total es: "+total+"<br>";


        for (let i=0;i<empleados.length;i++){
            document.getElementById("contador").innerHTML = document.getElementById("contador").innerHTML +
            empleados[i].name1+" "+ empleados[i].surname1+" "+ empleados[i].cell1+" "
            + empleados[i].birth+" "+" "+empleados[i].price1+"<p>"
        }
        
    }
}

