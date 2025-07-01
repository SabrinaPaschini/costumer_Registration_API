// Imports

import express from 'express';
import cors from 'cors';
import pg from 'pg';

const { Pool } = pg;

const app = express();
const port = 3000;

// Database configuration

const pool = new Pool({               
  user: 'postgres', // 
  host: 'localhost',
  database: 'cadastroClienteEPrestadores', // name of my database created in pgAdmin
  password: '1234',
});

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// Testing GET route

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Here is a GET request' }); 
});

// Testing POST route

app.post('/clientes', (req, res) => {
  console.log('This is a POST route');
  res.status(201).json({ message: 'POST request received' }); // response!
});
