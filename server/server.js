const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:8080', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))


app.use(express.json());

const apiRouter = require('./routes/api')
//for webpack build
// app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(express.static(path.resolve(__dirname, '../')));

// app.use('/', (req, res) => {
//   console.log('here');
//   return res.sendFile(path.resolve(__dirname, '../index.html'));
// });

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'Unknown error occurred' }
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log('Global error handler caught: ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//WORK IN PROGRESS
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
