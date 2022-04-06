function App() {
const persona = {

  nombre: "Carlos Manuel",
  apellidoPaterno: "Pantaleon",
  apellidoMaterno: "Miguel",
  edad: 21,
  
};


const { nombre, apellidoPaterno, apellidoMaterno, edad} = persona;

const contactoPersona = {
  telefono: "551 234 56781",
  email: "pantaleoncarlos937@gmail.com",
  empresa: "ittux",
}
const nuevoTelefono = "555 555 5555";
const infoPersona = {
  ...persona, 
  ...contactoPersona, 
  puesto: "alumno",
telefono: nuevoTelefono,
 };

//console.log(persona);
//console.log(contactoPersona);
//console.log(infoPersona); 


const frutas = ["manzana", "naranja", "fresa", "pera"];
const vegetales = ["lechuga", "zanahoria", "alcachofa"];
const carnes = ["res", "cerdo", "pollo", "pescado"];

const alimentos = [
  ...frutas, 
  ...vegetales, 
  ...carnes,
"otro alimento",
 ];
 
 console.table(frutas);
 console.table(vegetales);
 console.table(carnes);
 console.table(alimentos);
 

   return (
  <div className="App">
    <h3>
  {`Soy ${nombre} ${apellidoPaterno} ${apellidoMaterno} y tengo ${edad} años.`}
  </h3>
 
  
  
  </div>
  );
}

export default App;

