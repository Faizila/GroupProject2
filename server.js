// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const model = require ('./models')
const routes = require('./controllers');
// Import sequelize connection
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {maxAge: 360000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// helper
const hbs = exphbs.create({ helpers });

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// // turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server.
sequelize.sync({ force: false }).then(() => {
  // Starts the server to begin listening
  app.listen(PORT, () => console.log(`App listening on port ${PORT} 🚀 \n visit: http://localhost:${PORT}`));
});
