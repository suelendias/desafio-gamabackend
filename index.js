const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');


mongoose.connect('mongodb+srv://dbSuelen:algumacoisa@cluster0.zui7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    
});

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);


 app.listen(process.env.PORT || '3003' , () => 
 {
    console.log('rodando na porta 3003');
 }
 );
