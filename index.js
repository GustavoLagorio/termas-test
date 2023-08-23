import express from 'express'; //importar express

const app = express(); //creamos app

//iniciamos servidor
app.listen('8000', () =>{
    console.log('aplicacion iniciada en el puerto 8000');
})

//busca los archivos html para renderizar
app.set('views', './views')

//busca los archivos estaticos como css y js
app.use(express.static('./views'));
app.use(express.static('/'));
app.use(express.static('/')); 





app.get('/', (req, res) => {
    res.render('index')
})