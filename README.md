TP2: Recuperatorio
Desarrollar un servidor en Node.js con express que realice las siguientes tareas: (se
mostrará por consola cuando el servidor esté listo para operar y en que puerto lo está
haciendo) 
1) Responda en la ruta raíz un mensaje de acuerdo a la hora actual: si dicha hora se
encuentra entre las 6 y las 12hs será 'Buenos dias!', entre las 13 y las 19hs 'Buenas tardes!'
y de 20 a 5hs 'Buenas noches!'.
2) Así mismo, dispondrá de otra ruta get ‘/random’ la cuál iniciará un cálculo de 10000
números aleatorios en el rango del 1 al 20. Luego de dicho proceso, el servidor retornará un
objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la
cantidad de veces que salió dicho número.
3) Por último, declarar una ruta get ‘/operaciones’, que reciba por query-params dos
números y la operación a realizar entre ellos.
Ejemplo: …./operaciones?num1=5νm2=6&operacion=suma
Las operaciones válidas serán: suma, resta, multiplicación y división. Si no se ingresa
alguno de estos parámetros, si los tipos de datos no corresponden ó si operación no es
válida, se devolverá un error mediante un objeto con la siguiente estructura:
{ 
error: { 
num1: { valor: x, tipo: y },
num2: { valor: x, tipo: y }, 
operacion: { valor: x, tipo: y }
 }
}
Si todo está correcto, devolver un objeto que contenga los dos números ingresados, la
operación y el resultado.
- Separar los procesos del servidor en capas: ruteo, controlador, negocio y persistencia (si
fuese necesaria).
- Utilizar ES Modules como sistema de importación y exportación de módulos.
- Considerar todo lo necesario para que este proyecto puede funcionar de forma local.
