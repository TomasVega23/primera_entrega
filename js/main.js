function usuario() {
  let nombreUsuario = prompt("INGRESE SU USUARIO");
  let contraseña = prompt("INGRESE SU CONTRASEÑA");
  console.log("SU USUARIO ES: " + nombreUsuario);
  console.log("SU CONTRASEÑA ES: " + contraseña);
  let confirContraseña = prompt("CONFIRME SU CONTRASEÑA");
  if (confirContraseña === contraseña) {
    console.log("BUENAS  " + nombreUsuario);
  } else {
    console.log("HUBO UN EROR EN LA CONTRASEÑA");
  }
}
usuario();

function edad() {
  let edadEntrada = parseInt(prompt("INGRESE SU EDAD"));
  if (edadEntrada >= 16) {
    console.log("YA ESTAMOS POR TERMINAR SU INCIO DE CUENTA");
  } else {
    alert("TIENES QUE SER MAYOR DE 16 AÑOS");
  }
}
edad();


alert("LE ENVIAMOS A SU MAIL UN CODIGO PARA LA CONFRIMACION DE SU CUENTA")
alert("EL CODIGO ES: entrega uno")
let codigo= "entrega uno";
for(let i=1; i<=2; i++){
  let ingreso= prompt("INGRESE EL CODIGO");
  if(codigo === ingreso){
    alert("BIENVENIDO A NUESTRA PAGINA WEB");
    break;
  }else{
    alert("ERROR DE CODIGO")
  }
} 









