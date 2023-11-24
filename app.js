
async function DatosUsuario(nombreUsuario) {
    try {
        const response = await fetch(`https://api.github.com/users/${nombreUsuario}`);
        return await response.json();
    } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        throw new Error('Error al obtener datos del usuario');
    }
}

document.getElementById('GetUsers').addEventListener('click', async () => {
    const nombreUsuario = prompt('Ingrese el nombre de usuario de GitHub:');
    try {
        const datos = await DatosUsuario(nombreUsuario);

        const datosUsuario = document.getElementById('datosUsuario');
        datosUsuario.innerHTML = `
            <h2>${datos.name}</h2>
            <p>Nombre de usuario: ${datos.login}</p>
            <p>URL: <a href="${datos.html_url}" target="_blank">${datos.html_url}</a></p>
            
        `;
    } catch (error) {
        console.error(error.message);
    }
});


