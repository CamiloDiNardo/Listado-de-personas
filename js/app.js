const personas =[];
function mostrarpersonas(){
console.log("mostrar personas")
let texto = " ";
for(let persona of personas){
console.log(persona);
texto +=  `<li>${persona.nombre} ${persona.apellido}</li> `;
}
document.getElementById("personas").innerHTML = texto;
}
function agregarpersona(){
const forma = document.forms["forma"];
const nombre =forma["nombre"];
const apellido= forma["apellido"];
if(nombre.value != "" && apellido.value != ""){
    const ashe = new persona(nombre.value,apellido.value);
    console.log(ashe);
    personas.push(ashe);
    mostrarpersonas();
}
else{
    console.log("pone un nombre y un apellido")
}
}