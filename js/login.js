const btnLogin = document.getElementById('btnLogin');
const inputUsuario = document.getElementById('usuario');
const inputPassword = document.getElementById('password');

const validations = (event) => {
    let mensaje = '';

    if( inputUsuario.value && inputUsuario.value.length > 0 && inputPassword.value && inputPassword.value.length > 0){
        mensaje = "campos correctos"
    }else {
        mensaje = 'campo usuario o password faltante';
    }
    alert(mensaje);
}


btnLogin.addEventListener('click', validations);
