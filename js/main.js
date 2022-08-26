// JavaScript source code
function calcular() {
    let inicial = document.getElementById("initValor").value;
    let final = document.getElementById("finValor").value;

    let inivalue = parseInt(inicial);
    let lastV= parseInt(final);
    console.log(inivalue);

    if (inicial < final) {
        for (inicial; inicial <= final; inicial++) {
            tablas(inicial);
        }

        function tablas(numero) {
            document.write("<h1>Tabla de multiplicar del " + numero + " </h1>");

            for (i = 1; i <= 10; i++) {
                document.write(
                    "<p>" + numero + "x " + i + "= " + numero * i + "</p>"
                );
            }
        }
    } else {
        document.write(
            "<h1 style ='color:red'>El valor inicial debe ser menor al valor final</h1>"
        );
    }
}