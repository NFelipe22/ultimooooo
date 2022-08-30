'use strict';
//1.objeto literal de JavaScript
let cristian ={
    nombre: 'cristian',
    apellidos: 'Guasca',
    edad: 17,
    altura: 1.63,
    peso: 65.2,
    caminar:function(){
        return'yo camino';
    },
    hablar:function(){
        return'yo hablo';
    },
}
//console.log(cristian);
//onsole.log(cristian.nombre,cristian.apellidos);
//console.log(cristian.caminar);

/*NO SE PUDE
for(i of cristian){
    console.log(i);
}*/

Object.keys(cristian ).forEach((e) =>console.log(e));
