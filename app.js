require('colors');

const { inquirerMenu } = require('./helpers/inquierer');


console.clear();

const main = async() => {
    console.log('Hola Mundo'.red);

    let opt = '';

    do {
      opt = await inquirerMenu();
      console.log({ opt })
    } while (opt !== '0');

}

main();