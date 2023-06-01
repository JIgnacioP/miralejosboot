console.log('SELECCIONE UNA OPCION');
console.log('1 - Acepto');
console.log('2 - No Acepto');
codingres = Number(prompt('¿Acepta Suscribirse a Nuestro Newsletter?(1.Si / 2.No):'));
switch (codingres) {
case 1:
console.log('GRACIAS, por suscribirse a nuestro Newsletter');
break;
case 2:
console.log('Lamentamos su seleccion. Tal Vez en otra oportunidad.');
break;
default:
console.log('Por favor ingrese una opcion valida.');
}