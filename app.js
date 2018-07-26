/**
 * 
 */

const argv = require('./config/yargs').argv;
const colors = require('colors');
//var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(argv.base);
//console.log(argv.limite);
//console.log(argv.base);
let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite).then((archivo) => {
            //console.log('archivo creado:',colors.green(archivo));
            console.log('archivo creado:', archivo.green);
        }).catch((err) => {
            console.log('Ocurrio un error: ', err);
        })
        break;
    default:
        console.log('Comando no reconocido');
}


/**/