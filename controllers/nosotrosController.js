let nosotrosController = {

    index:  function(req,res) {
      
        let nosotrosList = ['Rocky', 'Batman','Barbie', 'Iron Man'];
        return res.render('nosotros', { title: 'Sobre Nosotros', listaPelis: nosotrosList});
    },
    show: function(req,res) {
        return res.send(`Estamos en el detalle de la pelicula: ${req.params.id}`);
    },
    create: function(req,res) {
        return res.send('Estamos en el formulario de carga de peliculas');
    }

}

module.exports = nosotrosController;