/* Micro-desafio01 */
let perfil='';

if(!perfil || perfil == ''){
    console.log('Debe especificar el perfil del usuario')
}  else if(perfil.toLowerCase() === 'admin'){
    console.log('Usted tiene todos los privilegios de uso del sistema')
}  else if(perfil.toLowerCase() === 'asistente'){
    console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos')
}  else if(perfil.toLowerCase() === 'invitado'){
    console.log('Usted sólo tiene permisos de consultar datos')
}  else{console.log('Debe especificar un perfil válido')
}
