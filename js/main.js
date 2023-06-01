codingres = Number(prompt('¿Acepta Suscribirse a Nuestro Newsletter?(1.Si / 2.No):'));
switch (codingres) {
case 1:
alert('GRACIAS, por suscribirse a nuestro Newsletter');
break;
case 2:
alert('Lamentamos su seleccion. Tal Vez en otra oportunidad.');
break;
default:
alert('Por favor ingrese una opcion valida.');
}