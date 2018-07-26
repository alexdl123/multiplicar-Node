/**
 * 
 */
let opts = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo de tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}