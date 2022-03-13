//Maria Jose Avila Amezcua 4H

//var Emitter = require('./emitter'); ---- inyecta la dependeNcia del event emitter de node js
//var Emitter = require('events'); ---- al ejecutarlo en la terminal, no sucede algo, por la sintaxis al inyectar la dependecia???

//seria asi:
import EventEmitter from 'events'; //inyecta la dependecia del eccent emitter de node.js
let emtr = new EventEmitter(); //esta variable inicializa los emisores de eventos

// inyectar dependencia events desde config.js
import events from './config.mjs';

//metodo on 
//(case sensitive)-- SINTAXIS: q evento meto.q funcionalidad tiene-- emtr.on('greet')

//se cambio esto:
// emtr.on('greet', () => {
//     console.log('Somewhere, someone said hello.');
// });

// a esto:
emtr.on(events.GREET, () => {
    console.log('Somewhere, someone said hello.')
});

//aqui se incluye otra accion en el mismo evento
emtr.on(events.GREET, () => {
    console.log('A greeting ocurred');
});


console.log('Hello');
//invoca funcion greet, en la terminal se muestra lo de la linea 23 y 28
emtr.emit('greet');

//se crea otro evento en emit, greet y jump
emtr.on(events.JUMP, () => {
    console.log('Someone jumped!');
});

console.log(emtr); //aqui se imprimen los eventos contenidos

//invoca funcion jump, en la terminal se muestra Someone jumped
emtr.emit('jump');

























//metodo on 
//(case sensitive)--q evento meto, q funcionalidad tiene-- emtr.on('greet')
//metodo emit

//config.js permitira cambiar algo con un solo cambio y este mismo se propaga, en lugar de estar cambiando uno x uno