require("colors");

const mostrarMenu =() => {

  return new Promise( resolve => {
    console.clear();
    console.log("=======================".america);
    console.log(" Seleccione una opcion ".blue);
    console.log("=======================".america);
  
    console.log(`${"1.".blue}Crear tarea`);
    console.log(`${"2.".blue}Listar tareas`);
    console.log(`${"3.".blue}Listar tareas completadas`);
    console.log(`${"4.".blue}Listar tareas pendientes`);
    console.log(`${"5.".blue}Completar tareas`);
    console.log(`${"6.".blue}Borrar tarea`);
    console.log(`${"0.".blue}Salir\n`);
  
    //Interfaz para mostrar y recibir la informacion al usuario.
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readline.question("Seleccione una opcion:", (opt) => {
      readline.close();
      resolve(opt);
    });

  });

};


const pausa = () => {
  return  new Promise( resolve => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readline.question(`\nPresione${"ENTER".green} para continuar\n`, () => {
      readline.close();
      resolve();
    });

  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
