import express from 'express';
import jsonGraphqlExpress from 'json-graphql-server';
import data from "./data"

const PORT = process.env.REACT_APP_SERVER_PORT || 8000;
const app = express();

app.use('/graphql', jsonGraphqlExpress(data));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});