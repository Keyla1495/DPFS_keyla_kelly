const contactController = {
    // Método para renderizar la página de contacto
    showForm: (req, res) => {
        res.render('contactenos', { title: 'Contáctenos' }); // Asegúrate de que el archivo se llama "contactenos.ejs" y está en "views/"
    },

    // Método para procesar el formulario
    processForm: (req, res) => {
        const { nombre, email, mensaje } = req.body;

        // Validar que los campos no estén vacíos
        if (!nombre || !email || !mensaje) {
            return res.render('contactenos', { error: 'Todos los campos son obligatorios.' });
        }

        // Aquí podrías guardar el mensaje en una base de datos o enviarlo por correo
        console.log(`Nuevo mensaje de ${nombre} (${email}): ${mensaje}`);

        // Redirigir a una página de confirmación o renderizar con un mensaje de éxito
        res.render('contactenos', { success: '¡Mensaje enviado con éxito! Te responderemos pronto.' });
    }
};

module.exports = contactController;
