const express = require('express');

const morgan = require('morgan');

const cors = require('cors');

// Settings
const app = express();
app.set('appName', 'Blog API Challenge');
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
//require('./routes')(app);
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to my Blog API Challenge!',
}));

// Listen port
app.listen(app.get('port'), () => {
  console.log(app.get('appName'));
  console.log('Server on port', app.get('port'));
});

module.exports = app;