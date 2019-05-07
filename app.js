const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');
require('dotenv').config();

const app = express();
const port = 4000;

// Allow cross-origin requests
app.use(cors());

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(port, () => {
  console.log(`Now listening on port ${port}...`);
});
