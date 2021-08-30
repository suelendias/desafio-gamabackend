const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3003;

mongoose.connect('mongodb+srv://dbSuelen:algumacoisa@cluster0.zui7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
   {
     useNewUrlParser: true
     useUnifiedTopology: true
   }
 );

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);

app.listen(port, () => {     
    console.log(`Server on ${port}`);      
});
